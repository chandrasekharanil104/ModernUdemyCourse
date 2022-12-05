import React from 'react';
import ProfileCard from "./ProfileCard"; // importing the profile card component.

const App = function () {
	return (
		<div>
			<div>Personal Digital Assitant </div>
			{/* Reusability of the component */}
			{/* Below the attributes are declared for the components which are called props. Props are passed from parent to child as an object. I.E from APP.js to ProfileCard.js */}
			<ProfileCard title="siri" handle="@Siri10" />{" "}
			<ProfileCard title="cortana" handle="Cortana07" />
			<ProfileCard title="alexa" handle="Alexa23" />
		</div>
	);
};

export default App;