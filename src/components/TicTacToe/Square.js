import { Flex, Button, useBreakpointValue } from "@chakra-ui/react";

// Creates the square component for the board
const Square = ({ value, onClick, index, winner, winningLine }) => {
	const isWinner = winner === "X" || winner === "O";
  const isFilled = value === "X" || value === "O";
  
	return (
		<Flex margin={0}>
			<Button
				variant="solid"
				className="square"
				colorScheme={
					isWinner && value === winner && winningLine.includes(index)
						? "pink"
						: "blue"
				}
				fontSize={{ base: 20, md: 28 }}
				fontWeight={700}
				width={{ base: 75, md: 150 }}
				height={{ base: 75, md: 150 }}
				size={useBreakpointValue(["xs", "md"])}
				onClick={onClick}
				disabled={isFilled || isWinner}
			>
				{value}
			</Button>
		</Flex>
	);
};

export default Square;