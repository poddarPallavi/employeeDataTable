import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders App component", () => {
    test("renders app", () => {
        render(<App />);
      });
});