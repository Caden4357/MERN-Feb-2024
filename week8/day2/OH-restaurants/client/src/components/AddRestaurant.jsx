import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const AddRestaurant = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        const newRestaurant = { name, cuisine, location, rating }
        axios.post('http://localhost:8000/api/create_restaurant', newRestaurant, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                navigate('/home')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h1>Add Restaurant</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    {errors.name ? <p>{errors.name.message}</p> : ''}
                </div>
                <div>
                    <label>Cuisine</label>
                    <input type="text" onChange={(e) => setCuisine(e.target.value)} />
                    {errors.cuisine ? <p>{errors.cuisine.message}</p> : ''}
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} />
                    {errors.location ? <p>{errors.location.message}</p> : ''}
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" onChange={(e) => setRating(e.target.value)} />
                    {errors.rating ? <p>{errors.rating.message}</p> : ''}
                </div>
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
}

export default AddRestaurant;