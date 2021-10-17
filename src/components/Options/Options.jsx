import React from "react";

const Options = ({ quotes, hasQuotes, checkIfAnswer }) => {
	const findDuplicates = (arr) =>
		arr.filter((item, index) => arr.indexOf(item) !== index);

	function uniqCharactersWithImages() {
		let uniqCharAndImgs = [];
		let characterList = quotes.map((elem) => elem.character); // Lista (arr) con todos los personajes.
		let duplicatedCharacter = findDuplicates(characterList); // Este es el personaje que está repetido:
		let isDuplicatedIn = false;

		for (let i = 0; i < quotes.length; i++) {
			// Si el array está vacío agrego el personaje
			if (uniqCharAndImgs.length === 0) {
				if (quotes[i].character === duplicatedCharacter[0]) {
					isDuplicatedIn = true;
				}
				uniqCharAndImgs.push({
					id: i + 1,
					character: quotes[i].character,
					image: quotes[i].image,
				});
				// Si el array no está vacío, antes de agregar, me fijo que no sea el repetido el personajke:
			} else if (quotes[i].character === duplicatedCharacter[0]) {
				console.log("No se agrega un character repetido");
			} else
				uniqCharAndImgs.push({
					id: i + 1,
					character: quotes[i].character,
					image: quotes[i].image,
				});
		}
		return uniqCharAndImgs;
	}

	const mapCharacters = () => {
		return uniqCharactersWithImages().map((elem) => (
			<div key={elem.id} onClick={checkIfAnswer}>
				<img src={elem.image} alt="avatar" id={elem.character} />
			</div>
		));
	};
	return (
		<div>
			<h4>Options:</h4>
			<ol>{hasQuotes && mapCharacters()}</ol>
		</div>
	);
};

export default Options;
