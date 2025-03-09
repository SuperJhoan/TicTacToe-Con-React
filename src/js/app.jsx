import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [players, setPlayers] = useState({ player1: "", player2: "", symbol: "X" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPlayers={setPlayers} />} />
        <Route path="/game" element={<Main players={players} />} />
      </Routes>
    </Router>
  );
}

export default App;
