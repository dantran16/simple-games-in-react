import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Container, ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/Fonts";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import customTheme from "./theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import './index.css'
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";
import EtchASketch from "./components/EtchASketch/EtchASketch";

function App() {
	useEffect(() => {
		console.log("rendered");
	});

	return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <BrowserRouter>
        <Container mt={3} maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
            <Route path="/etchasketch" element={<EtchASketch />} />
          </Routes>
        </Container>
      </BrowserRouter>
		</ChakraProvider>
	);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
