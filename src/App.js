import "bulma/css/bulma.css";
import React, { useState } from "react";

const animalsArray = ["wolf", "fox", "gator", "lion", "eagle", "tiger"];
const animalsFunction = () => {
	return animalsArray[Math.floor(Math.random() * animalsArray.length)];
};

const App = function () {
	const [count, setCount] = useState(0); // count is variable and setCount is function which is used to update the count.

	const handleClick = () => {
		setCount(count + 1); // Whenever React calls a setter function(setCount here) which causes the state to update. React is going to rerender the whole component (usually the App function )(function which is responsible for component). The piece of state is going to update to whatever we pass in the setter function.
	};
	return (
		<div>
			<div>Number of Animals: {count}</div>
			<button onClick={handleClick}>Add Animal</button>
		</div>
	);
};

export default App;