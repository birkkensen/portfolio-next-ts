import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import clientPromise from '../../database/mongodb';
import { ObjectId } from 'mongodb';

interface IProject {
	_id: string;
	id: number;
	name: string;
	description: string;
	timeSpent: string;
	languages: string;
	linkToProject: string;
	coverImage: string;
	objectFit: string;
	showcase: string[];
}
const Project: React.FC<IProject> = ({
	project,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		project && (
			<>
				<section className='flex flex-col lg:flex-row p-5'>
					<div className='mt-3 mb-5 lg:w-1/3'>
						<div className='h-1 w-5 rounded-sm mb-2 bg-charcoal'></div>
						<p className='leading-normal text-fadedBlack'>
							{project.name}
							<br />
							<a
								className='text-mainBlue font-bold underline transition-all duration-300 ease-in-out hover:text-mainBlueHover focus:text-mainBlueHover'
								href={project.linkToProject}
								target='_blank'
								rel='noreferrer'
							>
								Project on GitHub
							</a>
						</p>
					</div>
					<div className='mt-3 mb-5 lg:w-1/3'>
						<div className='h-1 w-5 rounded-sm mb-2 bg-charcoal'></div>
						<p className='leading-normal text-fadedBlack'>{project.languages}</p>
						<p>{project.timeSpent}</p>
					</div>
					<div className='mt-3 mb-5 lg:w-1/3'>
						<div className=' h-1 w-5 rounded-sm mb-2 bg-charcoal'></div>
						<p className='leading-normal text-fadedBlack'>{project.description}</p>
					</div>
				</section>
				{project.showcase.map((image: string, i: number) => {
					return (
						<div key={i} className='mt-0 mx-5 mb-6 shadow-2xl bg-transparent rounded-2xl'>
							<Image
								className='rounded-2xl bg-transparent'
								src={image}
								alt={project.name}
								objectFit={project.objectFit}
								width={1140}
								height={690}
								layout='responsive'
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
		params: { id: project._id.toString() },
	}));

	return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id: ObjectId = new ObjectId(params?.id as string);
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const project = await collection.findOne({ _id: id });

	return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default Project;
