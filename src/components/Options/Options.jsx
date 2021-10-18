import React from "react";
import "./Options.css";

const Options = ({ quotes, hasQuotes, checkIfAnswer }) => {
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
			<div
				className="character-card"
				key={elem.character}
				onClick={checkIfAnswer}
			>
				<img
					className="character-image"
					src={elem.image}
					alt="avatar"
					id={elem.character}
				/>
			</div>
		));
	};
	return (
		<div className="options-container">{hasQuotes && mapCharacters()}</div>
	);
};

export default Options;
