import { useState } from "react";
import { useEffect } from "react";
import FetchData from "./fetch";

const Characters = (props) => {
  useEffect(() => {
    generate();
  }, []);
  // const [char, setChar] = useState([]);
//API Paths ----
// data.results[0].image
// data.results[0].name
// data.results[0].gender
// data.results[0].species
// data.results[0].status
  
  
  // const generate = () => {
  //   fetch("https://rickandmortyapi.com/api/character", {
  //     headers: new Headers({
  //       Accept: "application/json",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) =>
  //     setChar(data.results[0].image))
        
  // };
  // console.log(char[0])
  
  const card = (props) => {
    let { card } = props;

    return (
      <div className="charContainer">
        <div className="charBlock">
          {card}
          {/* <img src={char} alt="charphoto"></img> */}
        </div>
      </div>
    );
  }
};


export default Characters;