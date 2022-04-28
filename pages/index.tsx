import type { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import clientPromise from '../database/mongodb';
import { GetStaticProps } from 'next';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
const Home: NextPage<any> = ({ data }): JSX.Element => {
	return (
		<>
			<Intro />
			<Projects projects={data} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const collection = (await clientPromise).db('portfolio').collection('projects');
	const projects = await collection.find({}).toArray();
	return {
		props: { data: JSON.parse(JSON.stringify(projects)) }, // will be passed to the page component as props
	};
};

export default Home;
