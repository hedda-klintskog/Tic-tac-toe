import Square from "./Square.js";
import CalcWin from "./CalcWin";
import Emoji from "./Emoji";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Board(props) {
  const x = <Emoji symbol={props.emoji} label="You" />;
  const y = <Emoji symbol={"\u{1F608}"} label="Opponent" />;
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    if (!isNext) {
      const timeout = setTimeout(() => {
        opponent();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isNext]);

  const handleClick = (i) => {
    let temp = squares.slice();
    if (temp[i]) {
      return;
    }
    temp[i] = x;
    placeMarker(temp);
  };

  const placeMarker = (temp) => {
    setIsNext(!isNext);
    setSquare(temp);
  };

  const opponent = () => {
    let temp = squares.slice();
    const winner = CalcWin(temp);
    if (winner) {
      props.handleWin(winner);
      return;
    }

    for (var i = 0; i < temp.length; i++) {
      if (!temp[i]) {
        temp[i] = y;
        placeMarker(temp);
        const winner = CalcWin(temp);
        if (winner) {
          props.handleWin(winner);
        }
        return;
      }
    }
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} dis={!isNext} onClick={() => handleClick(i)} />
    );
  };

  const winner = CalcWin(squares);
  let status;
  if (winner) {
    status = <p>Winner: {winner}</p>;
  } else {
    status = <p>Next player: {isNext ? x : y}</p>;
  }

  return (
    <div className="board">
      {status}

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

Board.propTypes = {
  emoji: PropTypes.string,
  handleWin: PropTypes.func,
};

export default Board;
