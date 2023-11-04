import React, { useState } from 'react';
import Board from './Board';
import { Box, Text, Button } from '@chakra-ui/react';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = current.squares.slice();
    if (winner || currentSquares[i]) {
      return;
    }
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares: currentSquares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleReset = () => {
    // Ketika tombol Reset diklik, atur ulang keadaan permainan
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Box className="game" display="flex">
      <Box className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </Box>
      <Box className="game-info">
        <Text fontSize="2xl">{status}</Text>
        <ol>{moves}</ol>
        <Button onClick={handleReset} colorScheme="blue">Reset</Button> {/* Tombol Reset dengan Chakra UI */}
      </Box>
    </Box>
  );
}

export default Game;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
