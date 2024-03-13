import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {


  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <>
      <h1>API Intro</h1>
      <hr />
      <h2>Star Wars Characters:</h2>
    </>
  )
}

export default App
