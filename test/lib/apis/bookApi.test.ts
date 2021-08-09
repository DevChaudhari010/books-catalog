import baseApi from "@lib/apis/baseApi";
import { bookApi } from "@lib/apis";
import { IBook } from "@types";

jest.mock("@lib/apis/baseApi");

const books: IBook[] = [
  { _id: "1", title: "Test 1" },
  { _id: "2", title: "Test 2" },
];

describe("Book Api Test", () => {
  test("fetch books", async () => {
    //@ts-ignore
    baseApi.mockImplementation(() => Promise.resolve({ data: books }));
    const response = await bookApi.getBooks();
    expect(baseApi).toBeCalled();
    expect(response).toEqual({ books, error: false });
  });
  test("fetch books failed with 500", async () => {
    //@ts-ignore
    baseApi.mockImplementation(() => Promise.reject({ data: {}, status: 500 }));
    const response = await bookApi.getBooks();
    expect(baseApi).toBeCalled();
    expect(response).toEqual({ books: null, error: true });
  });

  test("fetch book details", async () => {
    //@ts-ignore
    baseApi.mockImplementation(() => Promise.resolve({ data: books[0] }));
    const response = await bookApi.getBookDetails("test");
    expect(baseApi).toBeCalled();
    expect(response).toEqual({ book: books[0], error: false });
  });
  test("fetch book details failed with 500", async () => {
    //@ts-ignore
    baseApi.mockImplementation(() => Promise.reject({ data: {}, status: 500 }));
    const response = await bookApi.getBookDetails("test");
    expect(baseApi).toBeCalled();
    expect(response).toEqual({ book: null, error: true });
  });
});
