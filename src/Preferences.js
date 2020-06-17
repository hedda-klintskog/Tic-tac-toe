import React, { Component } from 'react';
import Emoji from "./Emoji"

class Preferences extends React.Component {
    constructor(props){
        super(props);
        
    }

    buttonClick=(e)=> {
        
        var emoji =e.target.value;
        this.props.buttonClick(emoji);
        var current = document.getElementsByClassName("active");
        console.log(current[0]);
        if(current[0]){
            console.log(current[0].className);
            current[0].className ="btn";
            //.replace("active", "");
            //.className="";
        }
        e.target.className += " active ";
                 
    }

    render() {
      
      
          return (
            <div className="grid-container">
                <button value={'\u{1F437}'} className="btn" onClick={this.buttonClick}>{'\u{1F437}'} </button>
                <button value={'\u{1F633}'} className="btn" onClick={this.buttonClick}>{'\u{1F633}'} </button>
                <button value={'\u{1F984}'} className="btn" onClick={this.buttonClick}>{'\u{1F984}'} </button>
                <button value={'\u{1F60E}'} className="btn" onClick={this.buttonClick}>{'\u{1F60E}'} </button>
                <button value={'\u{1F970}'} className="btn" onClick={this.buttonClick}>{'\u{1F970}'} </button>
                <button value={'\u{1F602}'} className="btn" onClick={this.buttonClick}>{'\u{1F602}'}</button>


         
                
  
            
          </div>
          );
        }
      



}

/*
class Board extends React.Component {
    constructor(props){
        super(props);
    }



}*/

export default Preferences;


