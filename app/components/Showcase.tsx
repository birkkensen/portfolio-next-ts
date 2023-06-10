import Image from "next/image";
import Link from "next/link";

import { ProjectDTO } from "../types";
import SvgIcon from "./SvgIcon";

interface PageProps {
  project: ProjectDTO;
}

function Showcase({ project }: PageProps) {
  return (
    <Link href={`/project/${project.slug}`} className="group">
      <div className="remove-corner-flicker-on-hover relative overflow-hidden rounded-lg no-underline shadow-2xl">
        <Image
          blurDataURL={`data:image/jpeg;base64,${project.coverImage.base64}`}
          className="transition-all duration-500 group-hover:scale-105"
          objectFit={project.objectFit}
          src={project.coverImage.url}
          layout="responsive"
          alt={project.name}
          placeholder="blur"
          height={350}
          width={550}
        />
        <div className="absolute bottom-0 flex h-2/5 w-full flex-col justify-end gap-3 rounded-b-lg bg-gradient-to-b from-transparent to-black">
          <p className="ml-4 font-bold text-white">{project.name}</p>
          <div className="mb-4 ml-4 flex gap-2">
            {project.coverImage.icons.map((icon) => (
              <SvgIcon name={icon} key={icon} size={20} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Showcase;
