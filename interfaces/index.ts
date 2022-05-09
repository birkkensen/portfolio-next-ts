import { ImageProps } from 'next/image';
export interface IProject {
	_id: string;
	name: string;
	description: string;
	duration: string;
	tags: string;
	links: string[];
	coverImage: {
		url: string;
		blurHash: string;
	};
	objectFit: ImageProps['objectFit'];
	images: {
		imageUrls: string[];
		blurHashes: string[];
	};
}
