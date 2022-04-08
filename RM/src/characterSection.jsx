import { useState } from "react";
import { useEffect } from "react";

const Characters = (prop) => {
  useEffect(() => {
    generate();
  }, []);
  const [name, setName] = useState([]);


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
        setName(data.results[0].image))
  };
  
  generate();

  return (
    <div className="charContainer">
      <div className="charBlock">
      <img src={name} alt="charphoto"></img>
      </div>
      </div>
  );
};
export default Characters;