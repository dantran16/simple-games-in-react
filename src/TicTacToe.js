import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import "./TictTacToe.css";

const Square = ({value, onClick}) => {
	return (
		<Flex margin={0}>
      <Button
        variant="outline"
        className="square"
        fontSize={{ base: 18, md: 24  }}
        fontWeight={700}
        width={{ base: 75, md: 150  }}
        height={{ base: 75, md: 150  }}
        size={useBreakpointValue(['xs', 'md'])}
				onClick={onClick}
			>
				{value}
			</Button>
		</Flex>
	);
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(" "))

  const handleClick = i => {
    setSquares(prev => {
      const copy = [...prev]
      copy[i] = 'X'
      return copy
    })
    
  }
  const renderSquare = (i) => <Square value={squares[i]} onClick={() => handleClick(i)}/>;

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
  const status = "Next player: X";
  

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1">Tic Tac Toe</Heading>
      <Box mb={3}className="status">{status}</Box>
			<Board />
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</Container>
	);
};

export default TicTacToe;
