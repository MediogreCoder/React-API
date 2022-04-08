import Data from "./fetch.jsx";
import portal from "./pngfind.com-portal-png-496250.png";
import Rick from "./RickName.png";
import Morty from "./MortyName.png";
import "./App.css";

function App() {
  return (
    <div>
      <div class="header">
        <div class="imgs">
        <img src={Rick} class="nameImg"></img>
          <img src={portal} class="portalImg"></img>
          <img src={Morty} class="nameImg"></img>
          </div>
      </div>
      <div className="App">
        <Data />
        {/* {data.map(
            (card) => 
              <CharCards card={card}></Cards>
          )
        } */}
      </div>
    </div>
  );
}

export default App;