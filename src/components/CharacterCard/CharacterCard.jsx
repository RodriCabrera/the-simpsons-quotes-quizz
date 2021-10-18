import React, { useState, useEffect } from "react";
import "./CharacterCard.css";

const CharacterCard = ({
	checkIfAnswer,
	elem,
	answer,
	hasChoosen,
	setHasChoosen,
}) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(false);
		setHasChoosen(false);
	}, [answer, setHasChoosen]);

	const selectedAnswer = (e) => {
		let selectedCharacter = e.target.id;
		setHasChoosen(true);
		setIsActive(true);
		setTimeout(() => {
			checkIfAnswer(selectedCharacter);
		}, 1000);
	};

	const conditionalClassName = () => {
		return isActive && elem.character === answer.character
			? "character-card correct-answer"
			: isActive
			? "character-card wrong-answer"
			: hasChoosen && elem.character === answer.character
			? "character-card correct-answer"
			: "character-card";
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
