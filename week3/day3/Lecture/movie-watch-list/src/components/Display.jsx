import React, {useState} from 'react';

const Display = (props) => {
    const {movieWatchlist, setMovieWatchlist} = props


    const deleteHandler = (id) => {
        const updatedMovieWatchlist = movieWatchlist.filter((movie) => movie.id !== id)
        console.log(updatedMovieWatchlist);
        setMovieWatchlist(updatedMovieWatchlist)
    }

    const toggleHasBeenWatched = (id) => {
        const updatedMovieWatchlist = movieWatchlist.map((movie) => {
            if(movie.id === id){
                movie.hasBeenWatched = !movie.hasBeenWatched
            }
            return movie
        })
        setMovieWatchlist(updatedMovieWatchlist)
    }
    return (
        <div className='d-flex justify-content-between'>
            {
                movieWatchlist.map((movie) => (
                    <div key={movie.id} className={`${movie.hasBeenWatched? 'bg-primary': 'bg-secondary'} text-success`}>
                        {
                            movie.hasBeenWatched?
                            <p className='text-decoration-line-through'>Title: {movie.movieTitle}</p>:
                            <p className=''>Title: {movie.movieTitle}</p>

                        }
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Year: {movie.releaseYear}</p>
                        <button onClick={() => deleteHandler(movie.id)} className='btn btn-danger'>Delete</button>
                        <br />
                        <label>Toggle Watched Movie</label>
                        <input type="checkbox" onClick={() => toggleHasBeenWatched(movie.id)} />
                        {/* {
                            movie.hasBeenWatched?
                            <p>You watched this movie already</p>:
                            <p>You havent watched this movie yet</p>
                        } */}
                    </div>
                ))
            }
        </div>
)}

export default Display;