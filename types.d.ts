import { ImageProps } from 'next/image';

type CoverImage = {
	url: string;
	blurHash: string;
	base64: string;
	icons: string[];
};

type Images = {
	imageUrls: string[];
	blurHashes: string[];
	base64: string[];
};

export type ProjectDTO = {
	_id: string;
	name: string;
	date: string;
	slug: string;
	description: string;
	duration: string;
	tags: string;
	links: string[];
	coverImage: CoverImage;
	objectFit: ImageProps['objectFit'];
	images: Images;
};
