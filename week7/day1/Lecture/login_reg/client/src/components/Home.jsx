import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Welcome Home</h1>
            <button onClick={logout}>Logout</button>
        </div>
)}

export default Home;