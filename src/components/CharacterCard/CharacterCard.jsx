import React, { useState, useEffect } from "react";
import "./CharacterCard.css";

const CharacterCard = ({ checkIfAnswer, elem, answer }) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(false);
	}, [answer]);

	const selectedAnswer = (e) => {
		let selectedCharacter = e.target.id;
		console.log(selectedCharacter);
		setIsActive(true);
		setTimeout(() => {
			checkIfAnswer(selectedCharacter);
		}, 1200);
	};
	console.log(elem.character, answer.character);
	const conditionalClassName = () => {
		return isActive && elem.character === answer.character
			? "character-card correct-answer"
			: isActive
			? "character-card wrong-answer"
			: "character-card";
		// return elem.character === answer.character
		// 	? "character-card correct-answer"
		// 	: "character-card wrong-answer";
	};
	return (
		<div onClick={selectedAnswer} className={conditionalClassName()}>
			<img
				className="character-image"
				src={elem.image}
				alt="avatar"
				id={elem.character}
			/>
		</div>
	);
};

export default CharacterCard;
