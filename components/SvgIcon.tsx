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

interface Props {
	name: string;
	size: number;
}

const icon: Record<string, any> = {
	css: Css,
	express: Express,
	html: Html,
	nodejs: Nodejs,
	mongodb: Mongodb,
	react: React,
	sass: Sass,
	tailwind: Tailwind,
	typescript: Typescript,
	nextjs: Nextjs,
	javascript: Javascript,
	mocha: Mocha,
};
const SvgIcon: React.FC<Props> = ({ name, size }) => {
	const Icon = icon[name];
	return <Icon height={size} width={size} />;
};

export default SvgIcon;
