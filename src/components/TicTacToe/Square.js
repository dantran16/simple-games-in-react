import { Flex, Button } from "@chakra-ui/react";

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
				fontSize={{ base: 36, md: 72 }}
				fontWeight={700}
				width={{ base:"clamp(80px, 25vw, 150px)", md: 150 }}
				height={{ base:"clamp(80px, 25vw, 150px)", md: 150 }}
				onClick={onClick}
				disabled={isFilled || isWinner}
			>
				{value}
			</Button>
		</Flex>
	);
};

export default Square;
