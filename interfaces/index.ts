import { ImageProps } from 'next/image';
export interface IProject {
	_id: string;
	name: string;
	date: string;
	slug: string;
	description: string;
	duration: string;
	tags: string;
	links: string[];
	coverImage: {
		url: string;
		blurHash: string;
		base64: string;
	};
	objectFit: ImageProps['objectFit'];
	images: {
		imageUrls: string[];
		blurHashes: string[];
		base64: string[];
	};
}
