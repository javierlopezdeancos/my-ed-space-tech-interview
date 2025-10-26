
import { render, screen } from "@testing-library/react";
import { TextComponent } from "./text_component";

describe("Text Component", () => {
  it("renders with default body variant", () => {
    render(<TextComponent>Hello World</TextComponent>);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toHaveClass("text-base");
  });

  it("renders with h1 variant", () => {
    render(<TextComponent variant="h1">Heading 1</TextComponent>);
    const textElement = screen.getByText("Heading 1");
    expect(textElement).toHaveClass("text-4xl font-bold tracking-tight");
  });

  it("renders as a different element", () => {
    render(<TextComponent as="h1">Heading 1</TextComponent>);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<TextComponent className="custom-class">Custom</TextComponent>);
    const textElement = screen.getByText("Custom");
    expect(textElement).toHaveClass("custom-class");
  });
});
