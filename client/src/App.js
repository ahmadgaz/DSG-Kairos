import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DataVis from "./components/DataVis"

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <DataVis />
      </div>
    </div>
  );
}

export default App;
