import {useState} from 'react';

const Form = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)

    const submitHandler = (e) => {
        // stop the refreshing of the page
        e.preventDefault()
        // package up the user form data (to send to the backend eventually not now)
        const userObject = {
            username,
            email,
            password,
            age
        }
        console.log('LINE 20: ', userObject);
        // clear all the inputs of the form
        setUsername('')
        setEmail('')
        setPassword('')
        setAge(0)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <label>Age:</label>
            <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
            <button>Submit</button>
        </form>
)}

export default Form;