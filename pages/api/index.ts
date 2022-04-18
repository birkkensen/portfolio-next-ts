// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../public/projects.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json(data);
  }
}
