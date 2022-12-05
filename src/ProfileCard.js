import React from "react";

// Creating a Separate file for Profile Component.

const ProfileCard = (props) => {
	{
		/* Props are consumed here which are passed down from App.js*/
	}
	// console.log("PROPS ARE: ", props);    // Here you can see the props which are passed from App.js. Props is an object with the attributes specified on the component.
	return (
		<div>
			<div>
				The title is {props.title} and the social media handle is {props.handle}
				.{" "}
			</div>
		</div>
	);
};

export default ProfileCard; // exporting the component.
