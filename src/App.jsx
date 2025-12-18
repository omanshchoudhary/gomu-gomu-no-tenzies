import './App.css'
import Die from './components/Die'
function App() {

  return (
    <main className='main-section'>
      <div className='dice-grid'>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      <Die value={1}></Die>
      </div>
    </main>
  )
}

export default App
