import type { NextPage } from "next";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Projects />
    </>
  );
};

export default Home;
