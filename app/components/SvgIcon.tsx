import Image from "next/image";

import {
  Javascript,
  Typescript,
  Tailwind,
  Mongodb,
  Express,
  Nextjs,
  Nodejs,
  Mocha,
  React,
  Sass,
  Html,
  Css,
} from "../../public/images/icons";

interface Props {
  name: string;
  size: number;
}

const icon: Record<string, any> = {
  javascript: Javascript,
  typescript: Typescript,
  tailwind: Tailwind,
  mongodb: Mongodb,
  express: Express,
  nextjs: Nextjs,
  nodejs: Nodejs,
  mocha: Mocha,
  react: React,
  sass: Sass,
  html: Html,
  css: Css,
};
const SvgIcon: React.FC<Props> = ({ name, size }) => {
  return <Image src={icon[name].src} height={size} width={size} alt="Icon" />;
};

export default SvgIcon;
