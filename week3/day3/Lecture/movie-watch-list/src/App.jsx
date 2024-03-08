import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [movieWatchlist, setMovieWatchlist] = useState([])

  return (
    <>
      <h1>Movie Watchlist</h1>
      <hr />
      <h2>Add Movies To Your List</h2>
      <Form movieWatchlist={movieWatchlist} setMovieWatchlist={setMovieWatchlist}/>
      <hr />
      <Display movieWatchlist={movieWatchlist} setMovieWatchlist={setMovieWatchlist}/>
    </>
  )
}

export default App
