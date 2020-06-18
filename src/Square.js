import React from "react";
import PropTypes from "prop-types";

function Square(props) {
  return (
    <button className="square" disabled={props.dis} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.object,
};

export default Square;
