import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el); // controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when render is called.

const App = function () {
	return (
		<div>
			<h1> Hi There! </h1>
		</div>
	);
};

root.render(<App />);
