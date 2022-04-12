import React from "react";
import ReactDOM from "react-dom/client";
import TicTacToe from "./TicTacToe";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Container maxWidth="lg">
			<TicTacToe />
		</Container>
  </ChakraProvider>
);

