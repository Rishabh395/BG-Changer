import React from "react";
import { useState } from "react";
import "./bg.css";

function Bgchanger() {
  const [color, setcolor] = useState("olive");

  return (
    <div className="App"
    style={{ backgroundColor: color }}
    >


      <h1>BG Changer</h1>
      <div className="container" >
        <button className="items" style={{ backgroundColor: "red" }}
        onClick={()=>setcolor('red')}
        >
          Red
        </button>
        <button className="items" style={{ backgroundColor: "green" }}
         onClick={()=>setcolor('green')}
        >
          Green
        </button>
        <button className="items" style={{ backgroundColor: "orange" }}
         onClick={()=>setcolor('orange')}
        >
          Orange
        </button>
        <button className="items" style={{ backgroundColor: "pink" }}
         onClick={()=>setcolor('pink')}
        >
          pink
        </button>
        <button className="items" style={{ backgroundColor: "yellow" }}
         onClick={()=>setcolor('yellow')}
        >
          Yellow
        </button>
      </div>


    </div>
  );
}

export default Bgchanger;
