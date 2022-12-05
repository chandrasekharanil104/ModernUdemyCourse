import React from "react";

// Creating a Separate file for Profile Component.

const ProfileCard = ({ title, handle, image }) => {
	/* Props are consumed here which are passed down from App.js*/
	// console.log("PROPS ARE: ", props);    // Here you can see the props which are passed from App.js. Props is an object with the attributes specified on the component. NOTE: this can only be seen if props are specified as function arguments. Not when they are destructured.
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-1by1">
					<img src={image} alt="pda logo" />
				</figure>
			</div>
			<div className="card-content">
				<div className="media-content">
					<p className="title is-4">{title}</p>
					<p className="subtitle is-6">{handle}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard; // exporting the component.
