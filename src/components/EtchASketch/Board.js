import { Grid, GridItem } from "@chakra-ui/react";
import { render } from "@testing-library/react";

const Tile = ({ filled, index, setTiles }) => {
	const handleFill = (e) => {

    setTiles(prev => {
      const temp = [...prev]
      temp[index] = 'black'
      return temp;
    })
	};

	return (
		<GridItem
      onMouseOver={handleFill}
      style={{aspectRatio: 1/1}}
			bg={filled !== "blank" ? "black" : "white"}
		>
			&nbsp;
		</GridItem>
	);
};

const Board = ({ tiles, size, setTiles }) => {
	return (
    <Grid
      maxWidth="600px"
      maxHeight="600px"
      style={{aspectRatio: 1/1}}
			mb={3}
			templateColumns={`repeat(${size}, 1fr)`}
			className="board"
		>
			{tiles.map((filled, i) => (
				<Tile key={i} filled={filled} index={i} setTiles={setTiles} />
			))}
		</Grid>
	);
};

export default Board;
