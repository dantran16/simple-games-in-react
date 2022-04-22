import { useState } from "react";
import { Container, Heading, Button, Box } from "@chakra-ui/react";
import Board from "./Board";
import History from "./History";

const RockPaperScissors = () => {
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [history, setHistory] = useState([]);
	const [round, setRound] = useState(1);

	// Helper Object/Variables
	const winCondition = 5;
	const hand = {
		0: "Rock",
		1: "Paper",
		2: "Scissors",
	};

	const handleReset = () => {
		setPlayerScore(0);
		setComputerScore(0);
		setHistory([]);
    setRound(1);
    setGameOver(false)
	};

	// Handles the button clicks to stimulate one round of playing
	const handlePlayRound = (playerHand) => {
		const computerHand = hand[Math.floor(Math.random() * 3)];

		// Checks for scenarios outside of the choices being a tie and acts upon what happens when a
		// player wins or when a player loses
    const helperFunction = (playerHand, computerWinningHand) => {
      // Helper function to call the set scores for both computer and players
      const setScore = (callback) => {
        callback((prev) => {
          if (prev === winCondition - 1) {
            setGameOver(true)
          }
          return prev + 1
        });
      }
			if (computerHand === computerWinningHand) {
				setHistory((prev) => [
					...prev,
					{
						message: `You lost! Your ${playerHand} loses against their ${computerHand}`,
						round,
						playerHand,
						computerHand,
					},
				]);
        setScore(setComputerScore)
			} else {
				setHistory((prev) => [
					...prev,
					{
						message: `You won! Your ${playerHand} wins against their ${computerHand}`,
						round,
						playerHand,
						computerHand,
					},
				]);
				setScore(setPlayerScore)
			}
    };
    

		if (playerHand === computerHand) {
			setHistory((prev) => [
				...prev,
				{
					message: `You tied! Your ${playerHand} ties against their ${computerHand}`,
					round,
					playerHand,
					computerHand,
				},
			]);
		} else if (playerHand === hand[0]) {
			helperFunction(hand[0], hand[1]);
		} else if (playerHand === hand[1]) {
			helperFunction(hand[1], hand[2]);
		} else if (playerHand === hand[2]) {
			helperFunction(hand[2], hand[0]);
		}
		setRound((prev) => prev + 1);
	};

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1" size="xl">
				Rock Paper Scissors
			</Heading>
			<Button
				colorScheme="red"
				onClick={handleReset}
				mb={3}
				className="btn-reset"
			>
				Reset Scores
			</Button>
			<Box mb={3} className="status">
				{gameOver
					? playerScore === 5
						? "You won!"
						: "You lost!"
					: `Round: ${round}`}
			</Box>
			<Box mb={3} className="score">
				Score: {playerScore} - {computerScore}
			</Box>
      <Board gameOver={gameOver} playRound={handlePlayRound} history={history} />
			<History history={history} />
		</Container>
	);
};

export default RockPaperScissors;
