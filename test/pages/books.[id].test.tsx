import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Book, { getStaticProps, getStaticPaths } from "@pages/books/[id]";
import { IBook } from "@types";
import { bookApi } from "@lib/apis";

jest.mock("@lib/apis");

const books: IBook[] = [
  { _id: "1", title: "Test 1" },
  { _id: "2", title: "Test 2" },
];

const book: IBook = {
  _id: "1",
  title: "Test 1",
  description: "Test Desc",
  year: 1990,
};

describe("Book Details page", () => {
  test("matches snapshot for book Details", () => {
    const { asFragment } = render(<Book book={book} error={false} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test("matches snapshot for error", () => {
    const { asFragment } = render(<Book book={null} error={true} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test("Check book details exists", () => {
    const { getByText } = render(<Book book={book} error={false} />, {});
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test Desc")).toBeInTheDocument();
    expect(getByText("1990")).toBeInTheDocument();
  });
  test("Check error messgae exists on Error", () => {
    const { getByText } = render(<Book book={null} error={true} />, {});
    expect(
      getByText("Failed to load book Details. Please try again after sometime")
    ).toBeInTheDocument();
  });
  test("Check getStaticProps", async () => {
    const response = { book, error: false };
    //@ts-ignore
    bookApi.getBookDetails.mockImplementation(() => Promise.resolve(response));
    const staticProps = await getStaticProps({});
    expect(bookApi.getBookDetails).toBeCalled();
    expect(staticProps).toEqual(
      expect.objectContaining({
        props: response,
      })
    );
  });
  test("Check getStaticProps no book found", async () => {
    const response = { book: null, error: false };
    //@ts-ignore
    bookApi.getBookDetails.mockImplementation(() => Promise.resolve(response));
    const staticProps = await getStaticProps({});
    expect(bookApi.getBookDetails).toBeCalled();
    expect(staticProps).toEqual(
      expect.objectContaining({
        notFound: true,
      })
    );
  });
  test("Check getStaticPaths", async () => {
    const response = { books, error: false };
    //@ts-ignore
    bookApi.getBooks.mockImplementation(() => Promise.resolve(response));
    const staticPaths = await getStaticPaths({});
    expect(bookApi.getBooks).toBeCalled();
    expect(staticPaths).toEqual(
      expect.objectContaining({
        paths: response.books.map(({ _id }) => ({
          params: { id: _id.toString() },
        })),
      })
    );
  });
});
