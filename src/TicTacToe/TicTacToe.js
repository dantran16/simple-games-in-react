import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Heading,
} from "@chakra-ui/react";
import "./TictTacToe.css";
import Board from "./Board";

// A container for the Tic Tac Toe Game
const TicTacToe = () => {
	const [squares, setSquares] = useState(Array(9).fill(" "));
  const [turnOrder, setTurnOrder] = useState(1);
  const winningLine = calculateWinner(squares);
  const winner = squares[winningLine[0]];

	const handleClick = (i) => {
		setSquares((prev) => {
			const current = [...prev];
			current[i] = turnOrder % 2 === 0 ? "O" : "X";
			return current;
		});
		setTurnOrder((prev) => prev + 1);
  };
  
  const handleReset = () => {
    setTurnOrder(1)
    setSquares(Array(9).fill(" "))
  }

	let status = "";
	if (winner === "X" || winner === "O") {
		status = `Winner: ${winner}`;
	} else {
		status = `Next player: ${turnOrder % 2 === 0 ? "O" : "X"}`;
	}

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1">
				Tic Tac Toe
      </Heading>
      <Button onClick={handleReset} mb={3} className="btn-reset">
        Reset
      </Button>
			<Box mb={3} className="status">
				{status}
			</Box>
      <Board winner={winner} squares={squares} handleClick={handleClick} winningLine={winningLine}/>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
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
