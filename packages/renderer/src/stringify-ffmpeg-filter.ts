import {Internals} from 'remotion';
import {calculateATempo} from './assets/calculate-atempo';
import {ffmpegVolumeExpression} from './assets/ffmpeg-volume-expression';
import {AssetVolume} from './assets/types';

export const stringifyFfmpegFilter = ({
	trimLeft,
	trimRight,
	channels,
	startInVideo,
	volume,
	fps,
	playbackRate,
	durationInFrames,
}: {
	trimLeft: string;
	trimRight: string;
	channels: number;
	startInVideo: number;
	volume: AssetVolume;
	fps: number;
	durationInFrames: number;
	playbackRate: number;
}) => {
	const startInVideoSeconds = ((startInVideo / fps) * 1000).toFixed(); // in milliseconds

	const volumeFilter = ffmpegVolumeExpression({
		volume,
		startInVideo,
		fps,
	});
	return (
		`[0:a]` +
		[
			// Order matters! First trim the audio
			`atrim=${trimLeft}:${trimRight}`,
			// then set the tempo
			calculateATempo(playbackRate),
			// For n channels, we delay n + 1 channels.
			// This is because `ffprobe` for some audio files reports the wrong amount
			// of channels.
			// This should be fine because FFMPEG documentation states:
			// "Unused delays will be silently ignored."
			// https://ffmpeg.org/ffmpeg-filters.html#adelay
			`adelay=${new Array(channels + 1).fill(startInVideoSeconds).join('|')}`,
			// set the volume
			`volume=${volumeFilter.value}:eval=${volumeFilter.eval}`,
			// Only in the end, we pad to the full length.
			'apad=whole_dur=' + (durationInFrames / fps).toFixed(3),
		]
			.filter(Internals.truthy)
			.join(',') +
		`[a0]`
	);
};
