import { useState } from "react";

const FetchData = () => {

  const [char, setChar] = useState([]);
  //API Paths ----
  // data.results[0].image
  // data.results[0].name
  // data.results[0].gender
  // data.results[0].species
  // data.results[0].status
  
  
  const generate = () => {
    fetch("https://rickandmortyapi.com/api/character", {
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setChar(data.results[0].image))
        
  };
  console.log(char)
}

export default FetchData