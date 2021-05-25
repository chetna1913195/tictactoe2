import React, { useState } from 'react';
import './styles/node.scss';
import Board from './components/Board';
import { calculateWinner } from './helper';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}
`
    : `next player is ${isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h4>{message}</h4>
      <Board board={board} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
};
export default App;
