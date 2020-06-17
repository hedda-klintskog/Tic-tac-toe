import React, { Component } from 'react';
import Board from "./Board"
import Preferences from "./Preferences";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          myEmoji: "",
          play: false,
          winner: null,
        };
    }

    handleEmoji = (emoji) => {
        this.setState({myEmoji: emoji});
    }

    handleWin = (win) => {
        this.setState({winner: win,});
    }

    handleNewGame = (e) =>{

        this.setState({play: !this.state.play,
            winner: null,
            myEmoji: "",
        });

    }

    handleClick = (e) => {
        this.setState({play: !this.state.play,
            winner: null,
        });
    }
    render() {
        const emoji = this.state.myEmoji;
      return (
          <div className="frame">
        
            {!this.state.play &&
            <div className="start">
                
                <p>Choose Emoji:</p><Preferences buttonClick={this.handleEmoji}/>
                <button className="regularButton" onClick={this.handleClick} disabled={!this.state.myEmoji}>Start</button>
            </div>
    }
          {/*<div className="game-info">
            <div></div>
            
<ol></ol>*/}

            {this.state.play &&
            <div className="game">
          <div className="game-board">
            <Board emoji = {this.state.myEmoji} handleWin = {this.handleWin}/>
          </div>
          </div>
          
          }
          {this.state.winner && 
          <div className="stratOver">
           <p><button className="regularButton" onClick={this.handleNewGame}>New game</button></p>
          </div>}
         {/** </div>*/} 
        </div>
        
      );
    }
  }

  export default Game;