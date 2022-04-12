import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import TicTacToe from "./TicTacToe/TicTacToe";

function App() {
	useEffect(() => {
		console.log("rendered");
	});

	return (
		<ChakraProvider>
			<Container maxWidth="lg">
				<TicTacToe />
			</Container>
		</ChakraProvider>
	);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
