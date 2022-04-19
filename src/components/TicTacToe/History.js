import { useState } from "react";
import { Box, List, ListItem, Button, Heading, Badge } from "@chakra-ui/react";

const History = ({ history, jumpTo }) => {
	const [toggle, setToggle] = useState(false);
	const turns = history.map((step, turn) => {
		const desc = turn ? "Go to move #" + turn : "Go to game start";
		return (
			<ListItem key={turn}>
				<Button mr={3} onClick={() => jumpTo(turn + 1)}>
					{desc}
				</Button>
				{step.move.row && step.move.row ? (
					<Badge
						p={2}
						colorScheme={turn === history.length - 1 ? "teal" : "black"}
						variant="subtle"
						fontSize={18}
						borderRadius={10}
					>
						{step.move.type} ({step.move.row}, {step.move.col})
					</Badge>
				) : (
					""
				)}
			</ListItem>
		);
	});
	if (toggle) {
		turns.reverse();
	}
  return (
    <Box mt={3}>
      <Heading as="h2" size="xl">
				Move History
      </Heading>
      <List mt={3} spacing={3}>
			<Button colorScheme="green" onClick={() => setToggle((prev) => !prev)}>
				Sort History {toggle ? "(Desc)" : "(Asc)"}
			</Button>
			{turns}
		</List>
    </Box>
		
	);
};

export default History;
