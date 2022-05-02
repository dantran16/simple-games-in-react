import { Tag, Box, List, ListItem } from "@chakra-ui/react";

const History = ({ history }) => {
	const rounds = history
		.map((e, key) => (
			<ListItem key={key}>
				<Tag colorScheme="green">Round {e.round}:</Tag> {e.message}
			</ListItem>
		))
		.reverse();

	return (
		<Box my={3}>
			<List mt={3} spacing={3}>
				{rounds}
			</List>
		</Box>
	);
};

export default History;
