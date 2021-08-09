import { IBook } from "@types";
import baseApi from "./baseApi";

export type GetBooksResponse = {
  books: IBook[] | null;
  error: boolean;
};

const getBooks: () => Promise<GetBooksResponse> = async () => {
  try {
    const response = await baseApi({ method: "get", url: "books" });
    return { books: response.data, error: false };
  } catch (error) {
    return { error: true, books: null };
  }
};

export type GetBookDetailsResponse = {
  book: IBook | null;
  error: boolean;
};

const getBookDetails: (id: string) => Promise<GetBookDetailsResponse> = async (
  bookId
) => {
  try {
    const response = await baseApi({
      method: "get",
      url: `books/${bookId}`,
    });
    return { book: response.data, error: false };
  } catch (error) {
    return { error: true, book: null };
  }
};

export default { getBooks, getBookDetails };
