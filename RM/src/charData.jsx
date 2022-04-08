import { useState, useEffect } from "react";

  //API Paths ----
      // data.results[0].image
      // data.results[0].name
      // data.results[0].gender
      // data.results[0].species
      // data.results[0].status

const FetchData  = () => {
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
   
      // fetch("https://rickandmortyapi.com/api/character/?page=1", {
        fetch(`https://rickandmortyapi.com/api/character/?page=${n}`, {
        headers: new Headers({
          Accept: "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) =>
          setChar(data.results))
      // console.log(data.results))
    }
  
        return (
          <div class="charContainer">
            <div id="listChars">
               {char.map(person => {
                return (<div class="charCard">
               <div class="photoDiv" key={person.id}>
                     <img src={person.image} class="profilepics" alt="profilepics"></img>
                    <h3>Name: {person.name} </h3>
                    <h3>Status: {person.status}</h3>
                    <h3>Species: {person.species}</h3>
                    <h3>Gender: {person.gender}</h3>
                    <h3>Origin: {person.origin.name}</h3>
                  </div>
                  </div>)
                })}
           </div>
            </div>
        
        )
  }


export default FetchData