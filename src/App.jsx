import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOption/PriceOption'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-4xl bg-slate-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
