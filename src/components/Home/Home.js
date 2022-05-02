import { Container, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Game = ({src, title, children, link}) => (
  <GridItem p={3} w="100%">
    <Link to={link}>
    <Image mb={2} border="1px" borderRadius='10px' p={2} src={src} />
    <Text mb={2} fontSize='lg' fontWeight={700}>{title}</Text>
    <Text mb={2} fontSize="md">{children}</Text>
    </Link>
  </GridItem>
)

const Home = () => {
	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1" size="xl">
				Directory
			</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <Game src='/img/rock_paper_scissors.png' title="Rock, Paper, Scissors" link="/rockpaperscissors">
          A best-to-5 game against the computer where you have three choices with 3 results on each round, depending on the enemy's choice (win, lose, and draw).
        </Game>
        <Game src='/img/tic_tac_toe.png' title="Tic, Tac, Toe" link="/tictactoe">
          A local 2-player game where first to have 3 in a row wins the game.
        </Game>
			</Grid>
		</Container>
	);
};

export default Home;
