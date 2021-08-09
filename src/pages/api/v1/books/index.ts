// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@lib";
import { bookController } from "@controllers";
import { IBookDocument } from "@models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBookDocument[] | Error>
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET": {
      await bookController.getBooks(req, res);
      break;
    }
    default: {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
