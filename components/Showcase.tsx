import Link from 'next/link';
import Image from 'next/image';
import SvgIcon from './SvgIcon';
import { ProjectDTO } from '../types';

interface PageProps {
	project: ProjectDTO;
}

const Showcase: React.FC<PageProps> = ({ project }) => {
	return (
		<Link href={`/project/${project.slug}`}>
			<a className='group'>
				<div className='relative no-underline overflow-hidden rounded-lg shadow-2xl remove-corner-flicker-on-hover'>
					<Image
						className='transform transition-all duration-500 group-hover:scale-105'
						src={project.coverImage.url}
						alt={project.name}
						width={550}
						height={350}
						layout='responsive'
						objectFit={project.objectFit}
						placeholder='blur'
						blurDataURL={`data:image/jpeg;base64,${project.coverImage.base64}`}
					/>
					<div className='flex flex-col gap-3 justify-end absolute rounded-b-lg bottom-0 bg-gradient-to-b from-transparent to-black w-full h-2/5'>
						<p className='text-white font-bold text-md ml-4'>{project.name}</p>
						<div className='flex gap-2 mb-4 ml-4'>
							{project.coverImage.icons.map((icon) => (
								<SvgIcon key={icon} name={icon} size={20} />
							))}
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Showcase;
