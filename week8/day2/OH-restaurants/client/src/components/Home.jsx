import axios from 'axios';
import React, {useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userContext } from '../context/userContext';
import { useEffect } from 'react';

const Home = (props) => {
    const id = window.localStorage.getItem('Logged in user id')
    const {user, setUser} = useContext(userContext)

    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
                window.localStorage.removeItem('Logged in user id')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/get_logged_in_user`, {withCredentials:true})
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <Link to='/add_restaurant'>Add Restaurant</Link>
            <button onClick={logout}>Logout</button>
        </div>
)}

export default Home;