import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el); // controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when render is called.

root.render(<App />);