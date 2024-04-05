import React, { useState } from 'react';
import axios from 'axios'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import Form from './Form'
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
        <Form
            album={album}
            setAlbum={setAlbum}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            errors={errors}
        />
    )
}

export default Create;