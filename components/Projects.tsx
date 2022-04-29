import Link from 'next/link';
import Image from 'next/image';
import { IProject } from '../interfaces';

const Projects = ({ ...props }): JSX.Element => {
	const { projects } = props;
	return (
		<>
			{projects &&
				projects.map((project: IProject) => {
					return (
						<Link key={project._id} href={`/project/${project._id}`}>
							<a className='group'>
								<div className='relative no-underline overflow-hidden rounded-2xl shadow-2xl remove-corner-flicker-on-hover'>
									<Image
										className='transform transition duration-500 group-hover:scale-105'
										src={project.coverImage}
										alt={project.name}
										width={550}
										height={350}
										layout='responsive'
										objectFit={project.objectFit}
									/>
									<div className='flex items-center absolute rounded-b-2xl bottom-0 bg-gradient-to-b from-transparent to-black w-full h-2/5'>
										<p className='font-bold pl-10 text-white w-3/5 md:w-3/6'>{project.name}</p>
									</div>
								</div>
							</a>
						</Link>
					);
				})}
		</>
	);
};

export default Projects;
