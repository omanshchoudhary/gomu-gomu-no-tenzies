import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
function App() {
  const [dice, setDice] = useState(generateRandomDice())

  function generateRandomDice() {
    let randomValues = [];
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      randomValues.push(value);
    }
    return randomValues
  }

  const diceElements = dice.map(num => <Die value={num} />)
  return (
    <main className="main-section">
      <div className="dice-grid">{diceElements}</div>
    </main>
  );
}

export default App;
