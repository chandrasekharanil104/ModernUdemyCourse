import "bulma/css/bulma.css";
import React, { useState } from "react";

const animalsArray = ["wolf", "fox", "gator", "lion", "eagle", "tiger"];
const animalsFunction = () => {
	return animalsArray[Math.floor(Math.random() * animalsArray.length)];
};

const App = function () {
	const [animals, setAnimals] = useState([]);

	const handleClick = () => {
		setAnimals([...animals, animalsFunction()]); // spreads the existing array and then adds new element to that array. NOTE: Very important to remember whenever we are using state with array!!!!!!
	};

	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>{animals}</div>
		</div>
	);
};

export default App;