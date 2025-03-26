
import './App.css'
import First from './components/First'
function App() {
  let greet=""
  let Name="ingredients"


  return (
    <>
      <First  greet={greet} name={Name}/>
      {/* <Second />
      <Third /> */}

    </>
  )
}

export default App
