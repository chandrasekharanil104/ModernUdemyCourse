import "bulma/css/bulma.css";
import React from "react";
import ProfileCard from "./ProfileCard"; // importing the profile card component.
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = function () {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body"></div>
				<p className="title">Personal Digital Assitants</p>
			</section>
			{/* Reusability of the component */}
			{/* Below the attributes are declared for the components which are called props. Props are passed from parent to child as an object. I.E from APP.js to ProfileCard.js */}
			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard title="siri" handle="@Siri10" image={AlexaImage} />
						</div>
						<div className="column is-4">
							<ProfileCard
								title="cortana"
								handle="Cortana07"
								image={CortanaImage}
							/>
						</div>
						<div className="column is-4">
							<ProfileCard title="alexa" handle="Alexa23" image={SiriImage} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;
