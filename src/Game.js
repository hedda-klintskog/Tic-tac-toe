import React, {useState} from 'react';  
import Board from "./Board"
import Preferences from "./Preferences";

function Game() {
    

    const [emoji, setEmoji] = useState("");
    const [play, setPlay] = useState(false);
    const [winner, setWinner] = useState(null);
    const handleNewGame = () =>{
        
        setEmoji("");
        handleClick();
    }

    const handleClick = () => {
        setPlay(!play);
        setWinner(null);
       
    }

    
      return (
          <div className="frame">
        
            {!play &&
            <div className="start">
                
                <p>Choose Emoji:</p><Preferences buttonClick={(emoji) => setEmoji(emoji)}/> 
                <button className="regularButton" onClick={handleClick} disabled={!emoji}>Start</button>
            </div>}

            {play &&
            <div className="game">
          <div className="game-board">
            <Board emoji = {emoji} handleWin = {(win) => setWinner(win)}/>
          </div>
          </div>
          
          }
          {winner && 
          <div className="stratOver">
           <p><button className="regularButton" onClick={handleNewGame}>New game</button></p>
          </div>}
 
        </div>
        
      );
    };
 

  export default Game;