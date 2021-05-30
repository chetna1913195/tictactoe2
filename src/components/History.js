import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'game start' : `go to ${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default History;
