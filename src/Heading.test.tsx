import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

test("renders heading", () => {
	const { getByText } = render(<Heading />);
	const linkElement = getByText(/Hello react/i);
	expect(linkElement).toBeInTheDocument();
	expect(1).toBe(1);
});
test("renders a heading with argument", () => {
	const { getByText } = render(<Heading name={`World`} />);
	const linkElement = getByText(/Hello World/i);
	expect(linkElement).toBeInTheDocument();
	expect(1).toBe(1);
});
