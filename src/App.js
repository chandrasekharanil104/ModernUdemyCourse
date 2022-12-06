import "./App.css";
import React, { useState } from "react";
import AnimalsShow from "./AnimalsShow";

const animalsArray = ["dog", "bird", "gator", "cow", "cat", "horse"];
const animalsFunction = () => {
	return animalsArray[Math.floor(Math.random() * animalsArray.length)]; // creating a random animals array from the given animalsArray.
};

const App = function () {
	const [animals, setAnimals] = useState([]);

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalsShow type={animal} key={index} />; // taking the animals state and adding map function so that it iterates over that array and creates a new AnimalsShow component with type of animal from the map function.
	});

	const handleClick = () => {
		setAnimals([...animals, animalsFunction()]); // spreads the existing array and then adds new element to that array. NOTE: Very important to remember whenever we are using state with array!!!!!!
	};

	return (
		<div className="app">
			<button onClick={handleClick}>Add Animal</button>
			<div className="animal-list">{renderedAnimals}</div>{" "}
			{/* Rendering the animals here*/}
		</div>
	);
};

export default App;
