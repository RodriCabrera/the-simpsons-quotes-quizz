import React, { useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Options.css";

const Options = ({ quotes, hasQuotes, checkIfAnswer, answer }) => {
	const [hasChoosen, setHasChoosen] = useState(false);

	function uniqCharactersWithImages2() {
		const charactersAgregados = [];
		const uniqQuotes = [];
		for (let i = 0; i < quotes.length; i++) {
			if (charactersAgregados.indexOf(quotes[i].character) === -1) {
				charactersAgregados.push(quotes[i].character);
				uniqQuotes.push(quotes[i]);
			}
		}
		return uniqQuotes;
	}
	console.log("uniq2", uniqCharactersWithImages2());

	const mapCharacters = () => {
		return uniqCharactersWithImages2().map((elem) => (
			<CharacterCard
				key={elem.character}
				elem={elem}
				checkIfAnswer={checkIfAnswer}
				answer={answer}
				hasChoosen={hasChoosen}
				setHasChoosen={setHasChoosen}
			/>
		));
	};
	return (
		<div className="options-container">{hasQuotes && mapCharacters()}</div>
	);
};

export default Options;
