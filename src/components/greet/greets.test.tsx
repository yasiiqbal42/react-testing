import { render, screen } from "@testing-library/react";
import Greets from "./greets";

test("Greet renders correctly", () => {
  render(<Greets />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greets name="Yasir" />);
  const textElement = screen.getByText("Hello Yasir");
  expect(textElement).toBeInTheDocument();
});
