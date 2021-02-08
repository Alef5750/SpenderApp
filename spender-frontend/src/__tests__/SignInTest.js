import { render, screen } from "@testing-library/react";
import SignIn from "../pages/SignIn";

describe("when the SignIn page renders", () => {
  test("renders Welcome message", () => {
    render(<SignIn />);
    const WelcomeMsg = screen.getByText(/Welcome/i);
    expect(WelcomeMsg).toBeInTheDocument();
  });

  test("displays the logo", () => {
    render(<SignIn />);
    const displayedLogo = document.querySelector("img");
    expect(displayedLogo.src).toContain("Logo");
  });
});
