import React from 'react';
import ProfileCard from "./ProfileCard"; // importing the profile card component.

const App = function () {
	return (
		<div>
			<div>Personal Digital Assitant </div>
			<ProfileCard /> {/* Reusability of the component */}
			<ProfileCard />
			<ProfileCard />
		</div>
	);
};

export default App;