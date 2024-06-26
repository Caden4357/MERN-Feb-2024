import React, {useState, useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
const Login = (props) => {
    const {user, setUser, storeIdInLocalStorage} = useContext(userContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {email, password}, {withCredentials:true})
            .then((res) => {
                console.log(res);
                setUser(res.data)
                storeIdInLocalStorage(res.data._id)
                navigate('/home')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>Login</button>
            <p>Dont have an account ? <Link to={'/register'}>Sign up here</Link></p>
            
        </form>
)}

export default Login;