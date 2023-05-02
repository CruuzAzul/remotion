import {generateServiceName} from '../shared/generate-service-name';
import {validateGcpRegion} from '../shared/validate-gcp-region';
import {validateProjectID} from '../shared/validate-project-id';
import {validateRemotionVersion} from '../shared/validate-remotion-version';
import {checkIfServiceExists} from './check-if-service-exists';
import {constructServiceTemplate} from './helpers/construct-service-deploy-request';
import {getCloudRunClient} from './helpers/get-cloud-run-client';

export type DeployServiceInput = {
	remotionVersion: string;
	memoryLimit?: string;
	cpuLimit?: string;
	timeoutSeconds?: number;
	projectID: string;
	region: string;
};

export type DeployServiceOutput = {
	fullName: string | null | undefined;
	shortName: string | null | undefined;
	uri: string | null | undefined;
	alreadyExists: boolean;
};

/**
 * @description Creates a Cloud Run service in your project that will be able to render a video in GCP.
 * @link https://remotion.dev/docs/lambda/deployfunction
 * @param options.remotionVersion Which version of Remotion to use within the Cloud Run service.
 * @param options.projectID GCP Project ID to deploy the Cloud Run service to.
 * @param options.region The region you want to deploy your Cloud Run service to.
 * @returns {Promise<IService>} An object that contains the `functionName` property
 */
export const deployService = async (
	options: DeployServiceInput
): Promise<DeployServiceOutput> => {
	validateGcpRegion(options.region);
	validateProjectID(options.projectID);
	validateRemotionVersion(options.remotionVersion);

	if (!options.memoryLimit) {
		options.memoryLimit = '512Mi';
	}

	if (!options.cpuLimit) {
		options.cpuLimit = '1.0';
	}

	if (!options.timeoutSeconds) {
		options.timeoutSeconds = 300;
	}

	const parent = `projects/${options.projectID}/locations/${options.region}`;

	const cloudRunClient = getCloudRunClient();

	const existingService = await checkIfServiceExists({
		memoryLimit: options.memoryLimit,
		cpuLimit: options.cpuLimit,
		timeoutSeconds: options.timeoutSeconds,
		projectID: options.projectID,
		region: options.region,
	});

	const serviceName = generateServiceName({
		memoryLimit: options.memoryLimit,
		cpuLimit: options.cpuLimit,
		timeoutSeconds: options.timeoutSeconds,
	});

	if (existingService) {
		return {
			fullName: `projects/remotion-6/locations/${options.region}/services/${serviceName}`,
			shortName: serviceName,
			uri: null,
			alreadyExists: true,
		};
	}

	const request = {
		parent,
		service: {
			// service structure: https://googleapis.dev/nodejs/run/latest/google.cloud.run.v2.IService.html
			template: constructServiceTemplate({
				remotionVersion: options.remotionVersion,
				memoryLimit: options.memoryLimit,
				cpuLimit: options.cpuLimit,
				timeoutSeconds: options.timeoutSeconds,
			}),
		},
		serviceId: serviceName,
	};

	// Run request
	const [operation] = await cloudRunClient.createService(request);
	const [response] = await operation.promise();

	return {
		fullName: response.name,
		shortName: serviceName,
		uri: response.uri,
		alreadyExists: false,
	};
};
