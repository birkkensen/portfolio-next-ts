import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "./ui/aspect-ratio";
import { ProjectDTO } from "../types";
import SvgIcon from "./SvgIcon";

interface PageProps {
  project: ProjectDTO;
}

export function Showcase({ project }: PageProps) {
  return (
    <Link href={`/project/${project.slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg no-underline shadow-2xl">
        <AspectRatio ratio={16 / 9}>
          <Image
            style={{
              objectFit: project.objectFit ?? "cover",
            }}
            className="h-[384px] w-[512px] transition-all duration-500 group-hover:scale-105"
            blurDataURL={`data:image/jpeg;base64,${project.coverImage.base64}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={project.coverImage.url}
            alt={project.name}
            placeholder="blur"
            fill
          />
          <div className="absolute bottom-0 flex h-2/5 w-full flex-col justify-end gap-3 rounded-b-lg bg-gradient-to-b from-transparent to-black">
            <p className="ml-4 font-bold text-white">{project.name}</p>
            <div className="mb-4 ml-4 flex gap-2">
              {project.coverImage.icons.map((icon) => (
                <SvgIcon name={icon} key={icon} size={20} />
              ))}
            </div>
          </div>
        </AspectRatio>
      </div>
    </Link>
  );
}
