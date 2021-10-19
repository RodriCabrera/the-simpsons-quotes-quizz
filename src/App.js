import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Footer from "./components/Footer/Footer";
function App() {
	const [quotes, setQuotes] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [error, setError] = useState(null);
	const [rounds, setRounds] = useState(0);
	const hasQuotes = quotes.length > 0;
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};
	console.log(answer);
	useEffect(() => {
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=6")
			.then((res) => res.json())
			.then(
				(json) => {
					setQuotes(json);
					setAnswer(json[getRandomInt(0, 5)]);
					setRounds((prevState) => prevState + 1);
				},
				(error) => {
					setError(error);
				}
			);
	}, [score]);
	console.log(quotes);

	const checkIfAnswer = (character) => {
		if (character === answer.character) {
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
					<h1 className="title yellow-black"> QUOTES QUIZZ</h1>
				</header>
				{hasQuotes && (
					<>
						<h3 className="quote yellow-black">
							<b>Who Said</b> "{answer.quote}"
						</h3>
						<Options
							quotes={quotes}
							hasQuotes={hasQuotes}
							checkIfAnswer={checkIfAnswer}
							answer={answer}
						/>
					</>
				)}
				<h2
					className={`score yellow-black ${
						score > 0 ? "green-font" : score === 0 ? "" : "red-font"
					}`}
				>
					Score: {score}
				</h2>
				<h3>Round: {rounds}</h3>
				<Footer />
			</div>
		);
	}
}

export default App;
