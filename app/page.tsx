import { Showcase } from "./components/Showcase";
import Intro from "./components/Intro";
import { projects } from "./(data)";

export default function Home() {
  return (
    <>
      <Intro />
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <h2 className="col-[1_/_-1] mb-6 mt-5 text-5xl font-bold text-charcoal">
          My learning process <br />
          so far
        </h2>
        {projects
          ?.sort((a, b) => b.order - a.order)
          .map((project) => (
            <Showcase project={project} key={project.id} />
          ))}
      </section>
    </>
  );
}
