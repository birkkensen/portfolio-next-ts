import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IProject } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import clientPromise from '../../database/mongodb';

type PageProps = {
	project: IProject;
};

const Project: NextPage<PageProps> = ({ project }): JSX.Element => {
	const stack = ['Frontend', 'Backend'];
	return (
		project && (
			<>
				<h1 className='text-3xl font-medium text-charcoal'>{project.name}</h1>
				<section className='flex flex-col md:gap-y-5 lg:gap-x-5 lg:flex-row p-5'>
					<div className='mt-2 mb-5 md:w-4/5 lg:w-1/4'>
						<div className='h-1 w-5 rounded-sm mb-4 bg-charcoal'></div>
						<p className='leading-normal text-fadedBlack'>
							{project.date}
							<br />
							{project.duration}
							<br />
							{project.links.map((link: string, i: number) => {
								return (
									<a
										key={uuidv4()}
										className='text-mainBlue font-bold underline transition-all duration-300 ease-in-out hover:text-mainBlueHover focus:text-mainBlueHover'
										href={link}
										target='_blank'
										rel='noreferrer'
									>
										{project.links.length > 1 ? stack[i] : 'Project'} on GitHub
										{i < 1 ? <br /> : ''}
									</a>
								);
							})}
						</p>
					</div>
					<div className='mt-3 mb-5 md:w-4/5 lg:w-2/5'>
						<div className='h-1 w-5 rounded-sm mb-4 bg-charcoal'></div>
						<div className='flex flex-wrap gap-2'>
							{project.tags.split(',').map((tag: string) => {
								return (
									<p
										key={uuidv4()}
										className='leading-normal text-fadedBlack text-mainBlue font-medium bg-fadedBlue rounded-full px-3 py-1'
									>
										{tag}
									</p>
								);
							})}
						</div>
					</div>
					<div className='mt-3 mb-5 md:w-4/5 lg:w-2/5'>
						<div className=' h-1 w-5 rounded-sm mb-4 bg-charcoal'></div>
						<p className='leading-normal text-fadedBlack'>{project.description}</p>
					</div>
				</section>
				{project.images.imageUrls.map((image: string, i: number) => {
					return (
						<div
							key={uuidv4()}
							className='mt-0 mx-5 mb-6 shadow-2xl rounded-xl bg-transparent overflow-hidden'
						>
							<Image
								className='blur-none transition-all duration-500 ease-linear rounded-lg'
								src={image}
								alt={project.name}
								// objectFit={project.objectFit}
								width={1140}
								height={690}
								layout='responsive'
								placeholder='blur'
								blurDataURL={`data:image/jpeg;base64,${project.images.base64[i]}`}
							/>
						</div>
					);
				})}
			</>
		)
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const projects = await collection.find({}).toArray();
	const paths = projects.map((project) => ({
		params: { id: project.slug.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// const id: ObjectId = new ObjectId(params?.id as string);
	const id: string = params?.id as string;
	const slug: string = id;
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const project = await collection.findOne({ slug: { $regex: slug, $options: 'i' } });

	return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default Project;
