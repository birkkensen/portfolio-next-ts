import { decode } from 'blurhash';
import { createCanvas } from 'canvas';

export default function useBlurData(
	blurHashes: string[],
	width: number = 160,
	height: number = 120,
	punch: number = 1
): string[][] {
	const blurDataUrls = blurHashes.map((blurHash) => {
		const pixels = decode(blurHash, width, height, punch);
		const canvas = createCanvas(width, height);
		const ctx = canvas.getContext('2d');
		const imageData = ctx.createImageData(width, height);
		imageData.data.set(pixels);
		ctx.putImageData(imageData, 0, 0);
		return canvas.toDataURL();
	});
	return [blurDataUrls];
}
