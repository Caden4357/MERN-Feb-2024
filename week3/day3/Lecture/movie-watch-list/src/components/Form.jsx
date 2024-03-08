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

        // ! If you dont want to install uuid use the built in crypto package
        // const anotherId = crypto.randomUUID()
        // console.log('******************', anotherId);

        
        const newMovieId = uuidv4()
        const newMovie = {
            id:newMovieId,
            movieTitle,
            director,
            genre,
            releaseYear,
            hasBeenWatched:false
        }
        setMovieWatchlist([...movieWatchlist, newMovie])
        setMovieTitle('')
        setDirector('')
        setGenre('Action')
        setReleaseYear(1920)
    }

    return (
        <form onSubmit={submitHandler} className='w-50 mx-auto'>
            <div>
                <label className='form-label'>Title: </label>
                <input className='form-control' type="text" onChange={(e) => setMovieTitle(e.target.value)} value={movieTitle}/>
            </div>
            <div>
                <label>Director: </label>
                <input className='form-control' type="text" onChange={(e) => setDirector(e.target.value)} value={director}/>
            </div>
            <div>
                <label>Genre: </label>
                <select className='form-select' onChange={(e) => setGenre(e.target.value)}>
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
                <input className='form-control' type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>
            </div>
            <button className='btn btn-primary my-4'>Add Movie</button>
        </form>
)}

export default Form;

