import React, { useState } from 'react';
import './styles/node.scss';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helper';
const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  console.log('history', history);

  const winner = calculateWinner(current.board);
  const message = winner
    ? `winner is ${winner}
`
    : `next player is ${current.isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h4>{message}</h4>
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
      ></Board>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
