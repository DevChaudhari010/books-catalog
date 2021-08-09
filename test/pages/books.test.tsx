import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Books, { getStaticProps } from "@pages/books";
import { IBook } from "@types";
import { bookApi } from "@lib/apis";

jest.mock("@lib/apis");

const books: IBook[] = [
  { _id: "1", title: "Test 1" },
  { _id: "2", title: "Test 2" },
];

describe("Books page", () => {
  test("matches snapshot for books", () => {
    const { asFragment } = render(<Books books={books} error={false} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test("matches snapshot for error", () => {
    const { asFragment } = render(<Books books={null} error={true} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test("Check book title exists", () => {
    const { getByText } = render(<Books books={books} error={false} />, {});
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });
  test("Check error messgae exists on Error", () => {
    const { getByText } = render(<Books books={null} error={true} />, {});
    expect(
      getByText("Failed to load books. Please try again after sometime")
    ).toBeInTheDocument();
  });
  test("Check getStaticProps", async () => {
    const response = { books, error: false };
    //@ts-ignore
    bookApi.getBooks.mockImplementation(() => Promise.resolve(response));
    const staticProps = await getStaticProps({});
    expect(bookApi.getBooks).toBeCalled();
    expect(staticProps).toEqual(
      expect.objectContaining({
        props: response,
      })
    );
  });
});
