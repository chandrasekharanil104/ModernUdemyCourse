import React from "react";

// Creating a Separate file for Profile Component.

const ProfileCard = ({ title, handle }) => {
	console.log("TITLE & HANDLE", title, handle);
	{
		/* Props are consumed here which are passed down from App.js*/
	}
	// console.log("PROPS ARE: ", props);    // Here you can see the props which are passed from App.js. Props is an object with the attributes specified on the component. NOTE: this can only be seen if props are specified as function arguments. Not when they are destructured.
	return (
		<div>
			<div>
				The title is {title} and the social media handle is {handle}.
			</div>
		</div>
	);
};

export default ProfileCard; // exporting the component.
