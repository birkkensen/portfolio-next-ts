import { Showcase } from "./components/Showcase";
import clientPromise from "../database/mongodb";
import Intro from "./components/Intro";
import { ProjectDTO } from "./types";

async function getData() {
  const collection = (await clientPromise)
    .db("portfolio")
    .collection("projects");
  return (await collection
    .find({})
    .sort({ order: -1 })
    .toArray()) as unknown as ProjectDTO[];
}

export default async function Home() {
  const projects = await getData();
  return (
    <>
      <Intro />
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <h2 className="col-[1_/_-1] mb-6 mt-5 text-5xl font-bold text-charcoal">
          My learning process <br />
          so far
        </h2>
        {projects?.map((project) => (
          <Showcase key={project._id} project={project} />
        ))}
      </section>
    </>
  );
}
