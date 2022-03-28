import React, {useState, useEffect} from 'react'  
import './App.css'
import Square from './components/Square'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/clients").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    // General div
    <div>
      {/* Our Programs title */}
      <div>
        <h5 class="headline">OUR PROGRAMS</h5>
      </div>
      {/* div for the grid */}
      <div class = "grid-container">
        <div class="grid">
          <div>
            <Square title="building community" />
            <Square title="nutrition and health" />
            <Square title="giving back" />
            <Square title="parenting effectiveness" />
          </div>
          <div>
          <Square title="financial literacy" />
            <Square title="violence prevention" />
            <Square title="promoting academics" />
            <Square title="life skills classes" />
          </div>
          <div>
            <Square title="english fluency" />
            <Square title="one-on-one consultations" />
            <Square title="writing" />
            <Square title="continuing in the homes" />
            
          </div>
          <div>
            <Square title="stem education" />
            <Square title="path to college" />
            <Square title="computer education" />
            <Square title="community collaborations" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
