import {
	Css,
	Express,
	Html,
	Nodejs,
	Mongodb,
	React,
	Sass,
	Tailwind,
	Typescript,
	Nextjs,
	Javascript,
	Mocha,
} from '../public/images/icons';

interface props {
	name: string;
	size: number;
}
const SvgIcon: React.FC<props> = ({ name, size }) => {
	switch (name) {
		case 'react':
			return <React height={size} width={size} />;
		case 'tailwind':
			return <Tailwind height={size} width={size} />;
		case 'typescript':
			return <Typescript height={size} width={size} />;
		case 'mongodb':
			return <Mongodb height={size} width={size} />;
		case 'nodejs':
			return <Nodejs height={size} width={size} />;
		case 'css':
			return <Css height={size} width={size} />;
		case 'sass':
			return <Sass height={size} width={size} />;
		case 'express':
			return <Express height={size} width={size} />;
		case 'html':
			return <Html height={size} width={size} />;
		case 'nextjs':
			return <Nextjs height={size} width={size} />;
		case 'javascript':
			return <Javascript height={size} width={size} />;
		case 'mocha':
			return <Mocha height={size} width={size} />;
		default:
			return <></>;
	}
};

export default SvgIcon;
