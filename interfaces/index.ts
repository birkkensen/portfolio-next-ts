import { ImageProps } from 'next/image';
export interface IProject {
	_id: string;
	name: string;
	description: string;
	duration: string;
	tags: string;
	links: string[];
	coverImage: string;
	objectFit: ImageProps['objectFit'];
	images: {
		imageUrl: string[];
		blurHash: string[];
	};
}
