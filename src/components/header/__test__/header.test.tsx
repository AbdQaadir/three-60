import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../header";

const MockHeader = ({ title }: { title: string }) => {
  return (
    <BrowserRouter>
      <Header>
        <p>{title}</p>
      </Header>
    </BrowserRouter>
  );
};
describe("Header", () => {
  it("should be in the document", () => {
    render(<MockHeader title="" />);

    const headerLogo = screen.getByTestId("logo");
    expect(headerLogo).toBeInTheDocument();
  });

  it("should render a children as text", () => {
    render(<MockHeader title="Todo" />);

    const headerText = screen.getByText("Todo");
    expect(headerText).toBeInTheDocument();
  });

  it("should render board routes", () => {
    render(<MockHeader title="Todo" />);

    const headerLinks = screen.getAllByRole("link");

    expect(headerLinks.length).toBe(3);
  });

  it("should add active class to active route", () => {
    render(<MockHeader title="Todo" />);

    const linkNav = screen.getByRole("link", { name: /links/i });
    fireEvent.click(linkNav);
    expect(linkNav).toHaveClass("active-nav");
  });
});
