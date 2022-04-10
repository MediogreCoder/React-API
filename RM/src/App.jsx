import React from "react";
import Characters from "./charCard.jsx";
import { useEffect, useState } from "react";
import portal from "./pngfind.com-portal-png-496250.png";
import Rick from "./RickName.png";
import Morty from "./MortyName.png";
import "./index.css";
import "./App.css";

function App() {
  const [char, setChar] = useState([]);
  useEffect(() => 
  {
    apiFetch();
  }, [])
  let apiFetch = () => {
    
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max-min) + min);
    }
    let n = randomNumber(1, 42) 

        fetch(`https://rickandmortyapi.com/api/character/?page=${n}`, {
        headers: new Headers({
          Accept: "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          setChar(data.results))
    .then((console.log("fetched")))
    }

  return (
    <div class="container">
      <div class="header">
      <div class="imgs">
      <img src={Rick} class="nameImg" alt="headimg"></img>
          <img onClick={apiFetch} src={portal} class="portalImg" alt="headimg"></img>
        <img src={Morty} class="nameImg" alt="headimg"></img>
        </div>
      </div>
    <div class="listChars">
      {char.map ((person) =>
        < Characters person={person}/>)}
      </div>
      </div>
  )
}

export default App
