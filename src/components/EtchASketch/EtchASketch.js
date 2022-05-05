import { useState } from "react";
import { Flex, Button, Container, Heading } from "@chakra-ui/react";
import Board from "./Board";

const populateTiles = (size) => {
  const tiles = []
  for (let i = 0; i < size * size; i++) {
    tiles.push('white')
  }
  return tiles
}

const EtchASketch = () => {
  const [size, setSize] = useState(16)
  const [tiles, setTiles] = useState(populateTiles(size))
  const [fillColor, setFillColor] = useState('black')

  const SizeButton = ({ size }) => {
    const handleClick = (size) => {
      setSize(size);
      setTiles(populateTiles(size))
    }
    return (
      <Button onClick={() => handleClick(size)} colorScheme="purple" variant="outline" mr={3} mb={3} className="btn-size">
        {size} x {size}
      </Button>
    )
  }

  const ColorButton = ({ color }) => {
    const handleClick = (color) => {
      setFillColor(prev => color)
    }
    return (
      <Button onClick={() => handleClick(color)} colorScheme="purple" variant="filled" mr={3} mb={3} className="btn-color">
        {color}
      </Button>
    )
  }

  const handleReset = () => {
    setTiles(populateTiles(size))
  }

  const renderSizeButtons = () => {
    return (
    <Flex justify="space-between" className="btn-group">
      {[4, 8, 16, 32, 64].map((number,i) => <SizeButton key={i} size={number} />)}
    </Flex>
  )
  }

  const renderColorButtons = () => {
    return (
      <Flex justify="space-between" className="btns-group">
        {['black', 'white', 'green', 'red', 'blue'].map((color, i) => <ColorButton key={i} color={color} />)}
      </Flex>
    )
  }

	return (
		<Container mt={3} className="game">
			<Heading mb={3} as="h1" size="xl">
				Etch-A-Sketch
      </Heading>
      <Button colorScheme="yellow" mb={3} className="btn-undo">
				Undo Button
			</Button>
			<Button onClick={handleReset} colorScheme="red" ml={3} mb={3} className="btn-reset">
				Reset
			</Button>
      <Board fillColor={fillColor} size={size} tiles={tiles} setTiles={setTiles} mb={3} />
      {renderSizeButtons()}
      {renderColorButtons()}
		</Container>
	);
};

export default EtchASketch;
