import { render, screen } from "@testing-library/react";
import { Login } from "./components/Login";
import Carbons from "./components/Carbon/Carbons";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});

describe("Carbon credits Component", () => {
  test("renders carbon credits", () => {
    render(<Carbons />);
    const dashboard = screen.getByText("Dashboard");
    const accounts = screen.getByText("Accounts");
    const settings = screen.getByText("Settings");
    const profile = screen.getByText("Profile");

    const carbonCredits = screen.queryAllByText("Carbon Credits");

    expect(dashboard).toBeInTheDocument();
    expect(accounts).toBeInTheDocument();
    expect(settings).toBeInTheDocument();
    expect(profile).toBeInTheDocument();

    expect(carbonCredits.length).toEqual(2);
  });
});
