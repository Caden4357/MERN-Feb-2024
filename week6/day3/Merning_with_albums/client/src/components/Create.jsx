import React, { useState } from 'react';
import axios from 'axios'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
const Create = (props) => {
    const {albums, setAlbums} = props;
    const navigate = useNavigate()
    const [album, setAlbum] = useState({
        title: '',
        artist: '',
        year: 1900,
        genre: '',
        isExplicit: false
    })
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/albums', album)
            .then((res) => {
                setAlbums([...albums, res.data])
                console.log('RESPONSE DATA: ', res.data);
                setAlbum({
                    title: '',
                    artist: '',
                    year: 1900,
                    genre: '',
                    isExplicit: false
                })
            })
            .catch((err) => {
                console.log('ERROR: ', err);
                console.log('ERROR RESPONSE: ', err.response);
                console.log('ERROR RESP DATA: ', err.response.data);
                console.log('ERROR RESP DATA ERRORS: ', err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }


    const changeHandler = (e) => {
        if(e.target.type === 'checkbox'){
            console.log('CHECKBOX: ', e.target.checked);
            setAlbum({
                ...album,
                isExplicit: !album.isExplicit 
            })
        }else{
            setAlbum({
                ...album,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className='form-label'>Title:</label>
                    <input
                        className='form-control'
                        type="text"
                        onChange={changeHandler}
                        value={album.title}
                        name='title'
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
                        onChange={changeHandler}
                        value={album.artist}
                        name='artist'

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
                        onChange={changeHandler}
                        value={album.year}
                        name='year'

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
                        onChange={changeHandler}
                        value={album.genre}
                        name='genre'

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
                        onChange={changeHandler}
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

export default Create;