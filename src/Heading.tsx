import React from "react";

export type HeadingProps = { name?: string };

export const Heading: React.FC<HeadingProps> = ({ name = "React" }) => {
	return <h1>Hello {name}</h1>;
}
