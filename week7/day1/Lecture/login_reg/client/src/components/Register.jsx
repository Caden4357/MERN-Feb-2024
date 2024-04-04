import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {username, email, password, confirmPassword}, {withCredentials:true})
            .then((res) => {
                console.log(res.data);
                navigate('/home')
            })  
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Register</h2>
            <div>
                <label>Username:</label>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button>Register</button>
        </form>
)}

export default Register;