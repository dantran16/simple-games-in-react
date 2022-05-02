import { Box, Flex, Grid, Button, GridItem, Image } from "@chakra-ui/react";

const Board = (props) => {
	const { playRound, history, gameOver } = props;

	const buttons = ["Rock", "Paper", "Scissors"].map((element, key) => (
		<GridItem rowSpan={1} key={key}>
			<Button
				isFullWidth={{ base: true, md: false }}
				disabled={gameOver}
				colorScheme="teal"
				p={8}
				onClick={() => playRound(element)}
			>
				{element}
			</Button>
		</GridItem>
	));

	const { playerHand, computerHand } =
		history.length
			? history[history.length - 1]
			: { playerHand: null, computerHand: null };

	const Card = ({ name, hand }) => (
		<Flex align="center" direction="column" mb={3} p={3} rowSpan={1}>
			{name}
			{hand ? (
				<Image
					objectFit="cover"
          boxSize={{ base: "100px", md: "150px" }}
					mt={3}
					p={5}
					borderRadius="full"
					src={`/img/rock-paper-scissors/${hand.toLowerCase()}.png`}
					alt={hand}
					background="white"
				/>
			) : (
				<Box
					objectFit="cover"
					boxSize={{ base: "100px", md: "150px" }}
					mt={3}
					p={5}
					borderRadius="full"
					alt={hand}
					background="white"
				/>
			)}
		</Flex>
	);

	return (
		<Box className="board">
			<Flex direction={{base:"row", md:"column"}} justify="space-around" my={3} gap={1}>
				<Card name="Computer" hand={computerHand} />
				<Card name="Player" hand={playerHand} />
			</Flex>
			<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={3}>
				{buttons}
			</Grid>
		</Box>
	);
};

export default Board;
