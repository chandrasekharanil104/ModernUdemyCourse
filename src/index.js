import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el); // controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when render is called.

const App = function () {
	const abcobject = { name: "Monkey D Luffy", number: 23 };
	return (
		<div>
			<input objectdisplay={abcobject} />{" "}
			{/* We can display object inside the input as props. */}
			{/* <h1>{abcobject}</h1> */}{" "}
			{/* Displaying object like this throws an error but we can display the object as props. NOTE:  Object cannot be displayed inside the JSX tags.!!!! */}
			<input objectdisplay={abcobject} />
		</div>
	);
};

root.render(<App />);
