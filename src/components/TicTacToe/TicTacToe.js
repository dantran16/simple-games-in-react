import React, { useState } from "react";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import "./TictTacToe.css";
import Board from "./Board";
import History from "./History";

// A Tic Tac toe Game Component
const TicTacToe = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [turnOrder, setTurnOrder] = useState(1);
  
  const current = history[history.length - 1]
	const winningLine = calculateWinner(current.squares);
	const winner = current.squares[winningLine[0]];

  const handleClick = (i) => {
    setHistory((prev) => {
      const squares = { squares: [...prev[prev.length - 1].squares] }
      squares.squares[i] = turnOrder % 2 === 0 ? "O" : "X";
      return [...prev, squares]
    })
		setTurnOrder((prev) => prev + 1);
	};

	const handleReset = () => {
		setTurnOrder(1);
		setHistory([{ squares: Array(9).fill(null) }]);
  };
  
  const handleJump = (turn) => {
    setTurnOrder(turn)
    setHistory((prev) => {
      const newHistory = []
      for (let i = 0; i < turn; i++) {
        newHistory.push(prev[i])
      }
      return newHistory;
    })
  }

	let status = "";
	if (winner === "X" || winner === "O") {
		status = `Winner: ${winner}`;
	} else if (turnOrder > 9) {
		status = "Game Over!";
	} else {
		status = `Next player: ${turnOrder % 2 === 0 ? "O" : "X"}`;
	}

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1">
				Tic Tac Toe
			</Heading>
			<Button onClick={handleReset} mb={3} className="btn-reset">
        { winner ==="X" || winner ==="O" ? 'Play Again?' : 'Reset'}
			</Button>
			<Box mb={3} className="status">
				{status}
			</Box>
			<Board
				winner={winner}
				squares={current.squares}
				onClick={handleClick}
				winningLine={winningLine}
			/>
			<div className="game-info">
				<div>{/* status */}</div>
        <History jumpTo={handleJump} history={history}/>
			</div>
		</Container>
	);
};

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return [a, b, c];
		}
	}
	return [];
};

export default TicTacToe;
