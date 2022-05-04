import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Heading,
	Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<Flex p={3} justify="space-between">
			<Heading as="h1" size="lg">
				<Link to="/">Simple Games in React</Link>
			</Heading>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon />}
					variant="outline"
				/>
				<MenuList>
					<Link to="/tictactoe">
						<MenuItem>Tic Tac Toe</MenuItem>
					</Link>
					<Link to="/rockpaperscissors">
						<MenuItem>Rock Paper Scissors</MenuItem>
          </Link>
          <Link to="/etchasketch">
						<MenuItem>Etch-A-Sketch</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default Navbar;
