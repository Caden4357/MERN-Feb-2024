import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form';
const Edit = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [album, setAlbum] = useState({
        title: '',
        artist: '',
        year: 1900,
        genre: '',
        isExplicit: false,
    })
    const [errors, setErrors] = useState({})



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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/albums/${id}`)
            .then((res) => {
                console.log(res.data);
                setAlbum(res.data)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/albums/${id}`, album)
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
            <Nav title={`Update ${album.title}`} />
            <Form
                album={album}
                setAlbum={setAlbum}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
                errors={errors}
            />
        </div>
    )
}

export default Edit;