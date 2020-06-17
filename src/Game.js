import React, {useEffect, useState} from 'react';  
import Board from "./Board"
import Preferences from "./Preferences";

function Game(props) {
    

    const [myEmoji, setEmoji] = useState("");
    const [play, setPlay] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleEmoji = (emoji) => {
        setEmoji(emoji);
    }

    const handleWin = (win) => {
        setWinner(win);
    }

    const handleNewGame = (e) =>{
        
        setEmoji("");
        handleClick();
    }

    const handleClick = (e) => {
        setPlay(!play);
        setWinner(null);
       
    }
    
    const emoji = myEmoji;
      return (
          <div className="frame">
        
            {!play &&
            <div className="start">
                
                <p>Choose Emoji:</p><Preferences buttonClick={handleEmoji}/>
                <button className="regularButton" onClick={handleClick} disabled={!myEmoji}>Start</button>
            </div>
    }
          {/*<div className="game-info">
            <div></div>
            
<ol></ol>*/}

            {play &&
            <div className="game">
          <div className="game-board">
            <Board emoji = {myEmoji} handleWin = {handleWin}/>
          </div>
          </div>
          
          }
          {winner && 
          <div className="stratOver">
           <p><button className="regularButton" onClick={handleNewGame}>New game</button></p>
          </div>}
         {/** </div>*/} 
        </div>
        
      );
    };
 

  export default Game;