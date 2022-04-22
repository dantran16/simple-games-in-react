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
		setGameOver(false);
	};

	// Handles the button clicks to stimulate one round of playing
	const handlePlayRound = (playerHand) => {
		const computerHand = hand[Math.floor(Math.random() * 3)];

		// Helper Object that contains what the player played, what the computer played, and the round we are currently on
		const currentRound = {
			round,
			playerHand,
      computerHand,
		};

		// Checks for scenarios outside of the choices being a tie and acts upon what happens when a
		// player wins or when a player loses. It updates the message.
		const updateScores = (computerWinningHand) => {
			// Helper function to call the set scores for both computer and players
			const setScore = (callback) => {
				callback((prev) => {
					if (prev === winCondition - 1) {
						setGameOver(true);
					}
					return prev + 1;
				});
			};

			if (computerHand === computerWinningHand) {
				currentRound.message = `You lost! Your ${playerHand} loses against their ${computerHand}`;
				setScore(setComputerScore);
			} else {
				currentRound.message = `You won! Your ${playerHand} wins against their ${computerHand}`
				setScore(setPlayerScore);
			}
		};


		if (playerHand === computerHand) {
			currentRound.message = `You tied! Your ${playerHand} ties against their ${computerHand}`
		} else if (playerHand === hand[0]) {
			updateScores(hand[1]);
		} else if (playerHand === hand[1]) {
			updateScores(hand[2]);
		} else if (playerHand === hand[2]) {
			updateScores(hand[0]);
    }
    
    setHistory((prev) => [
      ...prev,
      {
        ...currentRound,
      },
    ]);

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
        {
          gameOver ?
            "Play again?" :
            "Reset Scores"
        }
			</Button>
			<Box mb={3} className="status">
				{gameOver
					? playerScore === 5
						? "You won the game!"
						: "You lost the game!"
					: `Round: ${round}`}
			</Box>
			<Box mb={3} className="score">
				Score: {playerScore} - {computerScore}
			</Box>
			<Board
				gameOver={gameOver}
				playRound={handlePlayRound}
				history={history}
			/>
			<History history={history} />
		</Container>
	);
};

export default RockPaperScissors;
