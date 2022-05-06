import { Grid, GridItem } from "@chakra-ui/react";

const Tile = ({ color, index, setTiles, fillColor }) => {
	const handleFill = () => {
		setTiles((prev) => {
			const temp = [...prev];
			temp[index] = fillColor;
			return temp;
		});
	};
	return (
		<GridItem
      onMouseOver={handleFill}
      onTouchStart={handleFill}

			style={{ aspectRatio: 1 / 1 }}
			bg={color}
		>
			&nbsp;
		</GridItem>
	);
};

const Board = ({ tiles, size, setTiles, fillColor }) => {
	return (
		<Grid
			maxWidth="600px"
			maxHeight="600px"
			style={{ aspectRatio: 1 / 1 }}
			mb={3}
			templateColumns={`repeat(${size}, 1fr)`}
			className="board"
		>
			{tiles.map((tile, i) => (
				<Tile
					key={i}
					color={tile}
					fillColor={fillColor}
					index={i}
					setTiles={setTiles}
				/>
			))}
		</Grid>
	);
};

export default Board;
