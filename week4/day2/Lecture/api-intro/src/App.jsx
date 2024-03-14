import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [people, setPeople] = useState([])

  // useEffect(callback, dependencyArray)
  
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
      .then((response) => {
        console.log(response.data.results);
        setPeople(response.data.results)
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
      {
        people.map((character, idx) => (
          <div key={idx}>
            <p>{character.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
