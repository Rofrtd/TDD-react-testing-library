import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello react", () => {
	const { getByText, getByRole } = render(<App />);
	const linkElement = getByText(/Hello react/i);
	expect(linkElement).toBeInTheDocument();
	const label = getByText("Current");
	expect(label).toBeInTheDocument();
	const counter = getByRole("counter")
	expect(counter).toHaveTextContent('0')
});

