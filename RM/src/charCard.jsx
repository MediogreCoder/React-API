import { useState } from 'react'
import "./App.css";


const Characters = (props) => { 
  const [style, setStyle] = useState("charCard");
  const [infostyle, setInfoStyle] = useState("charInfo")

  function changeStyle(){
    if (style === "charCard"){
      setStyle("charCard2")
      setInfoStyle("charInfo2")
      console.log(style)
    }
    else {
      setStyle("charCard")
      setInfoStyle("charInfo")
     }
    
  }
  
  let { person } = props;
  return (
   
    <div class="charContainer">
       <div class={style} key={person.id}>
            <img onClick={changeStyle} src={person.image} class="profilepics" alt="profilepics"></img>
          <div class={infostyle} >
                <h3>{person.name} </h3>
                <h3 >Status: {person.status}</h3>
                <h3 >Species: {person.species}</h3>
                <h3 >Gender: {person.gender}</h3>
                <h3 >Origin: {person.origin.name}</h3>
            </div>
              </div>
              
      </div>
    )
}

export default Characters