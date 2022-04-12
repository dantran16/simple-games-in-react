import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import "./TictTacToe.css";

const Square = ({ value, onClick, squares, index }) => {
  const winner = squares[calculateWinner(squares)[0]]
  const isWinner = winner === 'X' || winner === 'O'
  const isFilled = value === 'X' || value === 'O'
  const winningLine = calculateWinner(squares)

	return (
		<Flex margin={0}>
      <Button
        variant="solid"
        className="square"
        colorScheme={isWinner && value === winner && winningLine.includes(index)? 'pink' : 'blue'}
        fontSize={{ base: 18, md: 24 }}
        fontWeight={700}
        width={{ base: 75, md: 150 }}
        height={{ base: 75, md: 150 }}
        size={useBreakpointValue(['xs', 'md'])}
        onClick={onClick}
        disabled={isFilled || isWinner}
			>
				{value}
			</Button>
		</Flex>
	);
};

const Board = ({squares, handleClick}) => {
  
  const renderSquare = (i) => <Square key={i} index={i} value={squares[i]} squares={squares} onClick={() => handleClick(i)}/>;

	return (
		<Flex className="game-board" direction="column" gap={2}>
			<Flex gap={2} className="board-row">
				{[0, 1, 2].map((i) => renderSquare(i))}
			</Flex>
			<Flex gap={2} className="board-row">
				{[3, 4, 5].map((i) => renderSquare(i))}
			</Flex>
			<Flex gap={2} className="board-row">
				{[6, 7, 8].map((i) => renderSquare(i))}
			</Flex>
		</Flex>
	);
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(" "))
  const [turnOrder, setTurnOrder] = useState(1);

  const handleClick = i => {
    const winner = squares[calculateWinner(squares)[0]]
    const isFilled = squares[i] === 'X' || squares[i] === 'O'
    if (winner === 'X' || winner === 'O' || isFilled) {
      return
    }

    setSquares(prev => {
      const current = [...prev]
      current[i] = turnOrder % 2 === 0 ? 'O' : 'X'
      return current
    })
    setTurnOrder(prev => prev + 1)
  }

  const winner = squares[calculateWinner(squares)[0]]
  let status = ""
  if (winner === 'X' || winner === 'O') {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${turnOrder % 2 === 0 ? 'O' : 'X'}`
  }

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1">Tic Tac Toe</Heading>
      <Box mb={3} className="status">{status}</Box>
			<Board squares={squares} handleClick={handleClick} />
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
}

export default TicTacToe;
