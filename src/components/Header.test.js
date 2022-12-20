import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("renders Header", () => {
    test("renders header component", () => {
        render(<Header />);
    });
});