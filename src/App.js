import React from 'react';
import './styles/node.scss';
import Board from './components/Board';
const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <Board></Board>
    </div>
  );
};
export default App;
