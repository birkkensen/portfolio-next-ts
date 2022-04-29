import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import clientPromise from '../database/mongodb';
import { Intro, Projects } from '../components';
import { IProject } from '../interfaces';
const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const projects: IProject[] = data;
	return (
		<>
			<Intro />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<h2 className='col-[1_/_-1] text-5xl mb-6 mt-5 text-charcoal font-bold'>
					My learning process <br />
					so far
				</h2>
				<Projects projects={projects} />
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const projects = await collection.find({}).toArray();
	return {
		props: { data: JSON.parse(JSON.stringify(projects)) }, // will be passed to the page component as props
	};
};

export default Home;
