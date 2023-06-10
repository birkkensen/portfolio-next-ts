import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

import clientPromise from "../../../database/mongodb";
import { ProjectDTO } from "../../types";

type PageProps = {
  project: ProjectDTO;
};

const Project: NextPage<PageProps> = ({ project }) => {
  const stack = ["Frontend", "Backend"];

  return (
    project && (
      <>
        <h1 className="text-3xl font-medium text-charcoal">{project.name}</h1>
        <section className="flex flex-col p-5 md:gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="mb-5 mt-2 md:w-4/5 lg:w-1/4">
            <div className="mb-4 h-1 w-5 rounded-sm bg-charcoal"></div>
            <div className="flex flex-col leading-normal text-fadedBlack">
              <span>{project.date}</span>
              <span>{project.duration}</span>
              {project.links.map((link, i) => {
                return (
                  <a
                    className="font-bold text-mainBlue underline transition-all duration-300 ease-in-out hover:text-mainBlueHover focus:text-mainBlueHover"
                    rel="noreferrer"
                    target="_blank"
                    href={link}
                    key={link}
                  >
                    {project.links.length > 1 ? stack[i] : "Project"} on GitHub
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mb-5 mt-3 md:w-4/5 lg:w-2/5">
            <div className="mb-4 h-1 w-5 rounded-sm bg-charcoal"></div>
            <div className="flex flex-wrap gap-2">
              {project.tags.split(",").map((tag) => {
                return (
                  <p
                    className="rounded-full bg-fadedBlue px-3 py-1 font-medium leading-normal text-fadedBlack text-mainBlue"
                    key={tag}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="mb-5 mt-3 md:w-4/5 lg:w-2/5">
            <div className="mb-4 h-1 w-5 rounded-sm bg-charcoal" />
            <p className="leading-normal text-fadedBlack">
              {project.description}
            </p>
          </div>
        </section>
        {project.images.imageUrls.map((image, i) => {
          return (
            <div
              className="mx-5 mb-6 mt-0 overflow-hidden rounded-xl bg-transparent shadow-2xl"
              key={image}
            >
              <Image
                className="rounded-lg blur-none transition-all duration-500 ease-linear"
                blurDataURL={`data:image/jpeg;base64,${project.images.base64[i]}`}
                layout="responsive"
                placeholder="blur"
                alt={project.name}
                height={690}
                // objectFit={project.objectFit}
                width={1140}
                src={image}
              />
            </div>
          );
        })}
      </>
    )
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collection = (await clientPromise)
    .db("portfolio")
    .collection("projects");
  const projects = await collection.find({}).toArray();
  const paths = projects.map((project) => ({
    params: { id: project.slug.toString() },
  }));

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = params?.id as string;
  const slug: string = id;
  const collection = (await clientPromise)
    .db("portfolio")
    .collection("projects");
  const project = await collection.findOne({
    slug: { $options: "i", $regex: slug },
  });

  return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default Project;
