import { Grid, Button, GridItem } from "@chakra-ui/react";

const Board = (props) => {
  const { playRound } = props;
  
  const buttons = ['Rock', 'Paper', 'Scissors'].map((element, key) => (
    <GridItem rowSpan={1} key={key}>
      <Button colorScheme='teal' p={8} onClick={() => playRound(element)}>{element}</Button>
    </GridItem>
  ));

	return (
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
      {buttons}
		</Grid>
	);
};

export default Board;
