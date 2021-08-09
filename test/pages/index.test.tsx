import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@pages/index";

describe("Home page", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test("Check for Books tile", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Books")).toBeInTheDocument();
  });
  test("Check for Technology tile", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Technology Choices")).toBeInTheDocument();
  });
});
