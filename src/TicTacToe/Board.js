import { Flex } from "@chakra-ui/react";
import Square from "./Square";

const Board = ({ squares, handleClick, winner, winningLine }) => {
	const renderSquare = (i) => (
		<Square
			key={i}
			index={i}
			value={squares[i]}
      winner={winner}
      onClick={() => handleClick(i)}
      winningLine={winningLine}
		/>
	);

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

export default Board;