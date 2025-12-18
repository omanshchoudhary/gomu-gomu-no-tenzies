import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateRandomDice());

  function generateRandomDice() {
    let randomDice = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      randomDice.push({
        value: randomNum,
        isHeld: true,
        id: nanoid()
      });
    }

    return randomDice;
  }

  function handleRollAllDice() {
    setDice(generateRandomDice());
  }

  function hold(id){
    console.log(id);
  }

  const diceElements = dice.map((item) => <Die isHeld={item.isHeld} key={item.id} value={item.value} handle={hold} id={item.id}/>);

  return (
    <main className="main-section">
      <div className="dice-grid">{diceElements}</div>
      <button className="roll-button" onClick={handleRollAllDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
