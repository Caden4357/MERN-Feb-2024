import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [movieWatchlist, setMovieWatchlist] = useState([])

  return (
    <>
      <Form movieWatchlist={movieWatchlist} setMovieWatchlist={setMovieWatchlist}/>
      <Display/>
    </>
  )
}

export default App
