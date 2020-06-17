import React, { Component } from 'react';
import Emoji from "./Emoji"

function Preferences(props){
    
    buttonClick=(e)=> {
        
        var emoji =e.target.value;
        props.buttonClick(emoji);
        var current = document.getElementsByClassName("active");
        console.log(current[0]);
        if(current[0]){
            console.log(current[0].className);
            current[0].className ="btn";
        }
        e.target.className += " active ";
                 
    }

      
          return (
            <div className="grid-container">
                <button value={'\u{1F437}'} className="btn" onClick={buttonClick}>{'\u{1F437}'} </button>
                <button value={'\u{1F633}'} className="btn" onClick={buttonClick}>{'\u{1F633}'} </button>
                <button value={'\u{1F984}'} className="btn" onClick={buttonClick}>{'\u{1F984}'} </button>
                <button value={'\u{1F60E}'} className="btn" onClick={buttonClick}>{'\u{1F60E}'} </button>
                <button value={'\u{1F970}'} className="btn" onClick={buttonClick}>{'\u{1F970}'} </button>
                <button value={'\u{1F602}'} className="btn" onClick={buttonClick}>{'\u{1F602}'}</button>

          </div>
          );
        };
      

export default Preferences;


