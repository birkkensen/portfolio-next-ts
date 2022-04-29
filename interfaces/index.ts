import { ImageProps } from 'next/image';
export interface IProject {
	_id: string;
	name: string;
	description: string;
	timeSpent: string;
	languages: string;
	linkToProject: string;
	coverImage: string;
	objectFit: ImageProps['objectFit'];
	showcase: string[];
}
