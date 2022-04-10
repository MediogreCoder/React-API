import { useState } from 'react'
import "./App.css";


const Characters = (props) => { 
  const [style, setStyle] = useState("charCard");

  const changeStyle = () => {
    setStyle("charCard2")
  }
  
  let { person } = props;
  return (
   
    <div class="charContainer">
       <div class={style}>
        <div class="photoDiv" key={person.id}>
            <img onClick={changeStyle} src={person.image} class="profilepics" alt="profilepics"></img>
          <div class="charInfo">
                <h3>{person.name} </h3>
                <h3>Status: {person.status}</h3>
                <h3>Species: {person.species}</h3>
                <h3>Gender: {person.gender}</h3>
                <h3>Origin: {person.origin.name}</h3>
            </div>
              </div>
              </div>
      </div>
    )
}

export default Characters