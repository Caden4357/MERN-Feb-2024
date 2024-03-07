import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = (props) => {
    const {movieWatchlist,setMovieWatchlist} = props
    const [movieTitle, setMovieTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('Action')
    const [releaseYear, setReleaseYear] = useState(1920)


    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Submitted');
        const newMovie = {
            id:uuidv4(),
            movieTitle,
            director,
            genre,
            releaseYear,
            hasBeenWatched:false
        }
        setMovieWatchlist([...movieWatchlist, newMovie])
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title: </label>
                <input type="text" onChange={(e) => setMovieTitle(e.target.value)} value={movieTitle}/>
            </div>
            <div>
                <label>Director: </label>
                <input type="text" onChange={(e) => setDirector(e.target.value)} value={director}/>
            </div>
            <div>
                <label>Genre: </label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Horror">Horror</option>
                    <option value="Family">Family</option>
                </select>
            </div>
            <div>
                <label>Release Year: </label>
                <input type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>
            </div>
            <button>Add Movie</button>
        </form>
)}

export default Form;