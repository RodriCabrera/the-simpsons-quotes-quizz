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
		} else {
			console.log("incorrecto");
			setScore((prevScore) => setScore(prevScore - 1));
		}
	};

	if (error) {
		return <h2>Error: {error.message}</h2>;
	} else {
		return (
			<div className="App">
				<header>
					<img
						className="header-image"
						src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"
						alt="header"
					/>
					<h1 className="yellow-black"> QUOTES QUIZZ</h1>
					<h2 className="yellow-black">Correct answers: {score}</h2>
				</header>
				{hasQuotes && (
					<>
						<h3 className="quote yellow-black">"{answer.quote}"</h3>
						<Options
							quotes={quotes}
							hasQuotes={hasQuotes}
							checkIfAnswer={checkIfAnswer}
							answer={answer}
						/>
					</>
				)}
			</div>
		);
	}
}

export default App;
