 import React from 'react'
 import { getByTitle, render } from "@testing-library/react"
import Counter from './Counter';

 test("should render a label and counter", () => {
    const { getByText, getByRole } = render(<Counter/>);
    const label = getByText("Count");
    expect(label).toBeInTheDocument();
    const counter = getByRole("counter");
    expect(counter).toBeInTheDocument();
 });

 test("should render a couter with a custom label", () => {
   const { getByText, getByRole } = render(<Counter label={`Current`}/>);
   const label = getByText("Current");
   expect(label).toBeInTheDocument();
   const counter = getByRole("counter");
   expect(counter).toBeInTheDocument();
});

test("should start at zero", () => {
   const { getByRole } = render(<Counter />);
   const counter = getByRole('counter');
   expect(counter).toHaveTextContent("0");
})

test("should start at another value", () => {
   const { getByRole } = render(<Counter start={10}/>);
   const counter = getByRole('counter');
   expect(counter).toHaveTextContent("10");
})
