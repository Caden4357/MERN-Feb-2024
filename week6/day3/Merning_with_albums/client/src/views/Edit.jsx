import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1900)
    const [genre, setGenre] = useState('')
    const [isExplicit, setIsExplicit] = useState(false)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/albums/${id}`)
            .then((res) => {
                console.log(res);
                setTitle(res.data.title)
                setArtist(res.data.artist)
                setYear(res.data.year)
                setGenre(res.data.genre)
                setIsExplicit(res.data.isExplicit)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedAlbum = {
            title,
            artist,
            year,
            genre,
            isExplicit
        }
        axios.put(`http://localhost:8000/api/albums/${id}`, updatedAlbum)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log('ERROR: ', err);
                console.log('ERROR RESPONSE: ', err.response);
                console.log('ERROR RESP DATA: ', err.response.data);
                console.log('ERROR RESP DATA ERRORS: ', err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <Nav title={`Update ${title}`} />
            <form className='w-50 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>Title:</label>
                    <input
                        className='form-control'
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    {
                        errors.title ?
                            <p className='text-danger'>{errors.title.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Artist:</label>
                    <input
                        className='form-control'
                        type="text"
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                    />
                    {
                        errors.artist ?
                            <p className='text-danger'>{errors.artist.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Year:</label>
                    <input
                        className='form-control'
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                    />
                    {
                        errors.year ?
                            <p className='text-danger'>{errors.year.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Genre:</label>
                    <input
                        className='form-control'
                        type="text"
                        onChange={(e) => setGenre(e.target.value)}
                        value={genre}
                    />
                    {
                        errors.genre ?
                            <p className='text-danger'>{errors.genre.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label className='form-label'>Explicit:</label>
                    <input
                        className=''
                        type="checkbox"
                        onChange={() => setIsExplicit(!isExplicit)}
                        checked={isExplicit}
                    />
                    {
                        errors.isExplicit ?
                            <p className='text-danger'>{errors.isExplicit.message}</p> :
                            null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit;