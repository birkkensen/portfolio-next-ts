import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { IProject } from '../interfaces';
import clientPromise from '../database/mongodb';
import { Intro, Projects } from '../components';
import { v4 as uuidv4 } from 'uuid';

type PageProps = {
	projects: IProject[];
};
const Home: NextPage<PageProps> = ({ projects }) => {
	return (
		<>
			<Intro />
			<section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<h2 className='col-[1_/_-1] text-5xl mb-6 mt-5 text-charcoal font-bold'>
					My learning process <br />
					so far
				</h2>
				{projects &&
					projects.map((project: IProject) => <Projects key={uuidv4()} project={project} />)}
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const projects = await collection.find({}).sort({ order: -1 }).toArray();
	return {
		props: { projects: JSON.parse(JSON.stringify(projects)) },
	};
};

export default Home;
