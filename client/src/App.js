import React, { useState, useEffect } from 'react'
import './App.css'
import Grid from './components/Grid'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
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
