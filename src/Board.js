import Square from "./Square.js";
import CalcWin from "./CalcWin";
import Emoji from "./Emoji"
import React, {useEffect, useState} from 'react';  


//functio component
//class Board extends React.Component {
function Board(props) {  



  //New object each time, can't compare them to each other 
  const x=<Emoji symbol={props.emoji} label="You"/>;
  const y=<Emoji symbol={'\u{1F608}'} label="Opponent"/>;
  const [squares,setSquare] = useState(Array(9).fill(null));  
  const [isNext,setIsNext] = useState(true);  


  const handleClick = (i) => {
    const winner = CalcWin(squares);
    if (winner || squares[i]) {
      handleWinner(winner);
      return;
      } 
   
    squares[i] = x;
    placeMarker();
    opponent();
    }

    const placeMarker = () => {
      setIsNext(!isNext);
      setSquare(squares); 
    }


    const opponent = () => { 
        var i = opponentMove(squares);
        if(i!=null){
          squares[i] = y;
          placeMarker();
        }
        const winner = CalcWin(squares);
        console.log(winner);   
        if(winner){
          handleWinner(winner);
        }  
    }

    const renderSquare = (i) => { 
      return <Square value={squares[i]}
      onClick={() => handleClick(i)}/>; 
    }

    const opponentMove = (squares) => { 
    const winner = CalcWin(squares);
    
      if (winner) {
        handleWinner(winner);
        return;
      } 
        for(var i =0; i<squares.length; i++){
            if(!squares[i]){
                return i;
            }
        }
        return null;
    }

    const handleWinner = (winner) =>{
      props.handleWin(winner);
    }
    const winner = CalcWin(squares);
    let status;
    if (winner) {
      status = <p>Winner: {winner}</p>;
      
    } 
    //unecesarry without the delay
    /*else {
      status = <p>Next player: {isNext ? x : y}</p>
    }*/
     
      return (
        <div className="board">
          {status}
          {/*<div className="status"></div>*/}
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
   // }
  };

  export default Board;