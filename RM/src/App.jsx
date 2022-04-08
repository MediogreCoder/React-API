import Characters from "./characterSection.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <div class="header">
        <h1>Rick and Morty</h1>
      </div>

      <div className="App">
        <Characters />
      </div>
    </div>
  );
}

export default App;