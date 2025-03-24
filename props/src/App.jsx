
import './App.css'
import First from './components/First'
// import Second from './components/Second'
// import Third from './components/Third'

function App() {
  let greet="hello"
  let Name="harsha"


  return (
    <>
      <First  greet={greet} name={Name}/>
      {/* <Second />
      <Third /> */}

    </>
  )
}

export default App
