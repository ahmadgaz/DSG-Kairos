import React, { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid'

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
    <div>
      <div>
        <div>
          <h5 class="headline">OUR PROGRAMS</h5>
        </div>
        <div class="grid-container">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
