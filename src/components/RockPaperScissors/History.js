import { Tag, Box, Heading, List, ListItem } from "@chakra-ui/react";

const History = ({ history }) => {
	const rounds = history
		.map((e, key) => (
			<ListItem>
				<Tag colorScheme="green">Round {e.round}:</Tag> {e.message}
			</ListItem>
		))
		.reverse();

	return (
		<Box mt={3}>
			<Heading as="h2" size="xl">
				History
			</Heading>
			<List mt={3} spacing={3}>
				{rounds}
			</List>
		</Box>
	);
};

export default History;
