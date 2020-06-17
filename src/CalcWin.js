import React, { Component } from 'react';

function CalcWin(squares) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[b] && squares[c] && squares[a].props.label === squares[b].props.label && squares[a].props.label === squares[c].props.label) {
            console.log("Vinst: "+squares[a]);
          return squares[a];

        }
      }
      return null;


  }

      //size = Math.sqrt(squares.length);

      //console.log(size);
  
      //for (let i = 0; i < size; i++) {
      /*
    col=row=diag=rdiag=0
  winner=false
  for i=1 to n
    if cell[x,i]=player then col++
    if cell[i,y]=player then row++
    if cell[i,i]=player then diag++
    if cell[i,n-i+1]=player then rdiag++
  if row=n or col=n or diag=n or rdiag=n then winner=true
    */
         
     // }
 

  export default CalcWin;