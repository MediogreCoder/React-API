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
    apiCall( );
  }, [])

  let apiCall = () => {
    // function randomNumber(min, max) {
    //   return Math.floor(Math.random() * (max-min) + min);
    // }
    // n = randomNumber(1, 42) 
    // for (let i = n; i <= n; i++) {
      fetch("https://rickandmortyapi.com/api/character/?page=1", {
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
            <div class="charBlock">
            <div id="listChars">
               {char.map(person => {
                return (<div>
               <div key={person.id}>
                     <img src={person.image} alt="profilepics"></img>
                   <h1>{person.name} - {person.status}</h1>
                  </div>
                  </div>)
                })}
           </div>
              {/* <h1>{char}</h1> */}
              {/* <img src={char} alt="charphoto"></img> */}
            </div>
          </div>
        );
  }



    

export default FetchData