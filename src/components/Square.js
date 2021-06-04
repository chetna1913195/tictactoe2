import React from 'react';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      className="square"
      type="button"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
}

export default Square;
