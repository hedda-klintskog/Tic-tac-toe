import Square from "./Square.js";
import CalcWin from "./CalcWin";
import Emoji from "./Emoji"
import React, {useEffect, useState} from 'react';  


//functio component
//class Board extends React.Component {
function Board(props) {  


    /*constructor(props) {
      super(props);
      state = {
        squares: Array(9).fill(null),
        isNext: true,
      };
      
    }*/
//props.emoji
    const x=<Emoji symbol={props.emoji} label="You"/>;
    const y=<Emoji symbol={'\u{1F608}'} label="Opponent"/>;
    const [squares,setSquare] = useState(Array(9).fill(null));  
    const [isNext,setIsNext] = useState(true);  
    

    //handleClick(i) {
    const handleClick = (i) => {
        //const newSquares = squares.slice();
        const winner = CalcWin(squares);
        console.log(squares);
        if (winner || squares[i]) {
          
            handleWinner(winner);
          return;
        } 
        squares[i] = x;
        //placeMarker(newSquares);
        setIsNext(!isNext);
        setSquare(squares);
        opponent();
        //setTimeout(() => { }, 500);
    }

    //placeMarker(squares){
      const placeMarker = (squares) => {
        setIsNext(!isNext);
        setSquare(squares);
        
    }

    //opponent(){
    const opponent = () => { 
        //const newSquares = squares.slice();
        var i = opponentMove(squares);
        
        if(i!=null){
          squares[i] = y;
          setIsNext(!isNext);
          setSquare(squares);
            //placeMarker(newSquares);

        }

        const winner = CalcWin(squares);
        console.log(winner);
        for(var e=0; e<squares.length; e++){
          if(squares[e]){
            console.log("Kolla här"+squares[e].props.label);
          }
          
            
          
        }
        console.log(squares);

        if(winner){
          handleWinner(winner);
        }
        if(squares[0]==squares[3]==squares[6]){
          console.log("funkar!");

        }else{
          console.log("funkar inte");
        }

    }

    //renderSquare(i) {
    const renderSquare = (i) => { 
      return <Square value={squares[i]}
      onClick={() => handleClick(i)}/>; 
    }

    //opponentMove(squares){
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

  
    //render() {
        //this.x=<Emoji symbol={this.props.emoji} label="You"/>; //gör så att man inte kan vinna i nuläget
    
    
    const winner = CalcWin(squares);
    let status;
    if (winner) {
      status = <p>Winner: {winner}</p>;
      
    } else {
      status = <p>Next player: {isNext ? x : y}</p>
    }

     
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