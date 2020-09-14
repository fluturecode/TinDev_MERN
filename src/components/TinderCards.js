import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "../axios";
import { SwipeableDrawer } from "@material-ui/core";

function Card() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get("/people");
			setPeople(req.data);
		}

		fetchData();
	}, []);

	console.log(people);

	return (
		<div className="tinderCards__cardContainer">
			{people.map((person) => (
				<TinderCard
					className="swipe"
					key={person.name}
					preventSwipe={["up", "down"]}
					onSwipe={(dir) => SwipeableDrawer(dir, person.name)}
					// onCardLeftScreen={() => OutofFrame(person.name)}
				>
					<div
						style={{ backgroundImage: `url(${person.url}}` }}
						className="card"
					>
						<h3>{person.name}</h3>
						<div className="person__info">
							<h4>GitHub Link: {person.git}</h4>
							<h4>Programming Language: {person.language}</h4>
							<h4>For Hire: {person.forHire}</h4>
						</div>
					</div>
				</TinderCard>
			))}
		</div>
	);
}

export default Card;
