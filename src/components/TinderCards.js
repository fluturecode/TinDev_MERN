import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "../axios";

function Card() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get("/people");
			setPeople(req.data);
		}
		fetchData();
	}, []);

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
