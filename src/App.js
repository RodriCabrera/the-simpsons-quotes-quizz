import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [error, setError] = useState(null);
	const hasQuotes = quotes.length > 0;
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	useEffect(() => {
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
			.then((res) => res.json())
			.then(
				(json) => {
					setQuotes(json);
					setAnswer(json[getRandomInt(0, 4)]);
				},
				(error) => {
					setError(error);
				}
			);
	}, [score]);
	console.log(quotes);
	const checkIfAnswer = (e) => {
		if (e.target.id === answer.character) {
			setScore((prevScore) => setScore(prevScore + 1));
			console.log("correcto");
		} else console.log("incorrecto");
	};

	if (error) {
		return <h2>Error: {error.message}</h2>;
	} else {
		return (
			<div className="App">
				<h1>The Simpsons Quotes Quizz</h1>
				<hr />
				{hasQuotes && (
					<>
						<h3 style={{ textAlign: "center" }}>{answer.quote}</h3>
						<Options
							quotes={quotes}
							hasQuotes={hasQuotes}
							checkIfAnswer={checkIfAnswer}
						/>
					</>
				)}
			</div>
		);
	}
}

export default App;
