import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ProjectDTO } from '../types';
import clientPromise from '../database/mongodb';
import { Intro } from '../components';
import Showcase from '../components/Showcase';

type PageProps = {
	projects: ProjectDTO[];
};
const Home: NextPage<PageProps> = ({ projects }) => {
	return (
		<>
			<Head>
				<title>Portfolio | Birk Kensén</title>
			</Head>
			<Intro />
			<section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<h2 className='col-[1_/_-1] text-5xl mb-6 mt-5 text-charcoal font-bold'>
					My learning process <br />
					so far
				</h2>
				{projects?.map((project) => (
					<Showcase key={project._id} project={project} />
				))}
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
