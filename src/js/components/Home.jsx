import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setPlayers }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  const startGame = (symbol) => {
    if (player1 && player2) {
      setPlayers({ player1, player2, symbol });
      navigate("/game");
    } else {
      alert("Por favor, ingresa los nombres de ambos jugadores.");
    }
  };

  return (
    <div className="home-container">
      <h1>Tic Tac Toe in React.js</h1>
      <h2>Pick A Weapon</h2>
      <input
        type="text"
        placeholder="Player 1 username"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2 username"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <div className="weapons">
        <button onClick={() => startGame("X")}>X</button>
        <button onClick={() => startGame("O")}>O</button>
      </div>
    </div>
  );
}

export default Home;
