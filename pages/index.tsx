import type { NextPage } from 'next';
import { IProject } from '../interfaces';
import clientPromise from '../database/mongodb';
import { GetStaticProps } from 'next';
import { Intro, Projects } from '../components';
import { v4 as uuidv4 } from 'uuid';

type PageProps = {
	projects: IProject[];
};
const Home: NextPage<PageProps> = ({ projects }) => {
	return (
		<>
			<Intro />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<h2 className='col-[1_/_-1] text-5xl mb-6 mt-5 text-charcoal font-bold'>
					My learning process <br />
					so far
				</h2>
				{projects &&
					projects.map((project: IProject) => <Projects key={uuidv4()} project={project} />)}
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const projects = await collection.find({}).toArray();
	return {
		props: { projects: JSON.parse(JSON.stringify(projects)) },
	};
};

export default Home;
