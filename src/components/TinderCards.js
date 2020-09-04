import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function Card() {
	const [people, setPeople] = useState([
		{
			name: "Qazi",
			url: "https://avatars0.githubusercontent.com/u/8461930?s=400&v=4",
			language: "Python",
			git: "https://github.com/CleverProgrammer",
			forHire: "no",
			relationStatus: "Committed",
			sex: "male",
		},
		{
			name: "Sonny",
			url:
				"https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4",
			language: "JavaScript",
			git: "https://github.com/sonnysangha",
			forHire: "yes",
			relationStatus: "Committed",
			sex: "male",
		},
	]);

	return (
		<div className="tinderCards__cardContainer">
			{people.map((person) => (
				<TinderCard
					className="swipe"
					key={person.name}
					preventSwipe={["up", "down"]}
				>
					<div
						style={{ backgroundImage: `url(${person.url}}` }}
						className="card"
					>
						<h3>{person.name}</h3>
					</div>
				</TinderCard>
			))}
		</div>
	);
}

export default Card;
