import { GetStaticPaths, GetStaticProps } from "next";
import ProjectImages from "../../components/ProjectImages";
// import { ReactChildren, ReactNode } from "react";
interface Project {
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

// TODO: Fix <any> type
const Project: React.FC<any> = ({ project }): JSX.Element => {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <div className="mt-3 mb-5 lg:w-1/3">
          <div className="h-1 w-5 rounded-sm mb-2 bg-charcoal"></div>
          <NameAndLink name={project.name} link={project.linkToProject} />
        </div>
        <div className="mt-3 mb-5 lg:w-1/3">
          <div className="h-1 w-5 rounded-sm mb-2 bg-charcoal"></div>
          <p className="leading-normal text-fadedBlack">
            {project.languages}
            <br />
            {project.timeSpent}
          </p>
        </div>
        <div className="mt-3 mb-5 lg:w-1/3">
          <div className=" h-1 w-5 rounded-sm mb-2 bg-charcoal"></div>
          <p className="leading-normal text-fadedBlack">{project.description}</p>
        </div>
      </section>
      <ProjectImages images={project.showcase} alt={project.name} objectFit={project.objectFit} />
    </>
  );
};

interface INameAndLink {
  name: string;
  link: string;
}
const NameAndLink: React.FC<INameAndLink> = ({ name, link }): JSX.Element => {
  return (
    <p className="leading-normal text-fadedBlack">
      {name}
      <br />
      <a
        className="text-mainBlue font-bold underline transition-all duration-300 ease-in-out hover:text-mainBlueHover focus:text-mainBlueHover"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Project on GitHub
      </a>
    </p>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api");

  const projects = await res.json();

  const paths = projects.map((project: Project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/${params?.id}`);

  const project = await res.json();

  return { props: { project } };
};

export default Project;
