import React from "react";
import Counter from "./Counter";
import { Heading } from "./Heading";

const App: React.FC = () => {
	return (
		<div>
			<Heading />
			<Counter label={"Current"} />
		</div>
	);
}

export default App;
