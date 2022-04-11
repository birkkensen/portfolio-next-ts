import Link from "next/link";
import Image from "next/image";
import porjectsJSON from "../public/projects.json";
const Projects: React.FC = (): JSX.Element => {
  const myWork = porjectsJSON.projects;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProjectsTitle />
      {myWork.map((project) => {
        return (
          <ProjectLink
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.coverImage}
            objectFit={project.objectFit}
          />
        );
      })}
    </div>
  );
};

const ProjectsTitle: React.FC = (): JSX.Element => {
  return (
    <h2 className="col-[1_/_-1] text-5xl mb-6 mt-5 text-charcoal font-bold">
      My learning process <br />
      so far
    </h2>
  );
};

interface ProjectProps {
  id: number;
  name: string;
  image: string;
  objectFit: any;
}
const ProjectLink: React.FC<ProjectProps> = ({ id, name, image, objectFit }): JSX.Element => {
  return (
    <Link href={`project/?id=${id}`}>
      <a className="group">
        <div className="relative no-underline overflow-hidden rounded-2xl shadow-xl">
          <Image
            className="bg-gray-700 transition-all duration-300 ease-in-out group-hover:scale-105"
            src={image}
            alt={name}
            width={550}
            height={350}
            layout="responsive"
            objectFit={objectFit}
          />
          <div className="flex items-center absolute rounded-b-2xl bottom-0 bg-gradient-to-b from-transparent to-black w-full h-2/5">
            <p className="font-bold pl-10 text-white w-3/5 md:w-3/6">{name}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Projects;
