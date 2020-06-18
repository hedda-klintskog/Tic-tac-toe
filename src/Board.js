import Square from "./Square.js";
import CalcWin from "./CalcWin";
import Emoji from "./Emoji";
import React, { useState } from "react";
import PropTypes from "prop-types";

function Board(props) {
  const x = <Emoji symbol={props.emoji} label="You" />;
  const y = <Emoji symbol={"\u{1F608}"} label="Opponent" />;
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }

    squares[i] = x;
    placeMarker();
    opponent();
  };

  const placeMarker = () => {
    setIsNext(!isNext);
    setSquare(squares);
  };

  const opponent = () => {
    const winner = CalcWin(squares);
    if (winner) {
      props.handleWin(winner);
    }

    for (var i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = y;
        placeMarker();
        const winner = CalcWin(squares);
        if (winner) {
          props.handleWin(winner);
        }
        return;
      }
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
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
