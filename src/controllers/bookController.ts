import type { NextApiRequest, NextApiResponse } from "next";
import { Book, IBookDocument } from "@models";

const getBooks = async (
  req: NextApiRequest,
  res: NextApiResponse<IBookDocument[] | Error>
) => {
  try {
    const books = await Book.find({}, "title");
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ name: "GET_BOOKS_ERROR", message: "Something went wrong" });
  }
};

const getBookDetails = async (
  req: NextApiRequest,
  res: NextApiResponse<IBookDocument | Error | null>
) => {
  try {
    const {
      query: { id },
    } = req;
    const bookDetails = await Book.findById(id);
    if (!bookDetails) {
      res.status(404);
    }
    res.status(200).json(bookDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      name: "GET_BOOKS_DETAILS_ERROR",
      message: "Something went wrong",
    });
  }
};

export { getBooks, getBookDetails };
