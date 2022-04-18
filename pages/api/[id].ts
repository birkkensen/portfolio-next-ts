import type { NextApiRequest, NextApiResponse } from "next";
import projects from "../../public/projects.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const { id } = req.query;

    const project = projects.find((project) => project.id.toString() === id);

    if (!project) {
      return res.status(400).json("User not found");
    }

    return res.status(200).json(project);
  }
}
