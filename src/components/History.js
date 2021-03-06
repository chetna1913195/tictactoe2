import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
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
    </div>
  );
}

export default History;
