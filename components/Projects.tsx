import Link from 'next/link';
import Image from 'next/image';
import useBlurData from '../hooks/useBlurData';
import React, { useState, useEffect } from 'react';
import { IProject } from '../interfaces';

type PageProps = {
	project: IProject;
};
const Projects: React.FC<PageProps> = ({ project }): JSX.Element => {
	const [blurDataUrls] = useBlurData([project.coverImage.blurHash]);
	const [blurData, setBlurData] = useState<string>();
	useEffect(() => {
		if (blurData) return;
		setBlurData(blurDataUrls[0]);
	}, [blurDataUrls, blurData]);

	return (
		<Link key={project._id} href={`/project/${project._id}`}>
			<a className='group'>
				<div className='relative no-underline overflow-hidden rounded-2xl shadow-2xl remove-corner-flicker-on-hover'>
					{blurData && (
						<Image
							className='transform transition-all duration-500 group-hover:scale-105'
							src={project.coverImage.url}
							alt={project.name}
							width={550}
							height={350}
							layout='responsive'
							objectFit={project.objectFit}
							placeholder='blur'
							blurDataURL={blurData}
						/>
					)}
					<div className='flex items-center absolute rounded-b-2xl bottom-0 bg-gradient-to-b from-transparent to-black w-full h-2/5'>
						<p className='font-bold pl-10 text-white w-3/5 md:w-4/6'>{project.name}</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Projects;
