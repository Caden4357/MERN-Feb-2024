import {useState} from 'react';

const Form = (props) => {
    const [userForm, setUserForm] = useState({
        username:'',
        email:'',
        password:'',
        age:0
    })
    const [error, setError] = useState('')

    const submitHandler = (e) => {
        // stop the refreshing of the page
        e.preventDefault()
        // package up the user form data (to send to the backend)
        if(userForm.username.length < 3 || userForm.email.length < 3 || userForm.password.length < 3 || userForm.age < 16){
            setError('Fill out the form correctly')
            return;
        }
        // API call to the BE to put this data in our database 
        console.log('LINE 20: ', userForm);
        // clear all the inputs of the form
        setUserForm({
            username:'',
            email:'',
            password:'',
            age:0
        })
    }

    const changeHandler = (e) => {
        console.log('NAME: ', e.target.name);
        console.log('VALUE: ', e.target.value);
        setUserForm({...userForm, [e.target.name]:e.target.value})
    }
    return (
        <form onSubmit={submitHandler}>
            {
                error.length > 0? 
                <p>{error}</p>:
                null
            }
            <label>Username:</label>
            <input type="text" onChange={changeHandler} name='username' value={userForm.username}/>
            {
                userForm.username.length < 3? 
                <p>Username must be 3 or more characters</p>:
                null
            }
            <label>Email:</label>
            <input type="email" onChange={changeHandler} name='email' value={userForm.email}/>
            <label>Password:</label>
            <input type="password" onChange={changeHandler} name='password' value={userForm.password}/>
            <label>Age:</label>
            <input type="number" onChange={changeHandler} name='age' value={userForm.age}/>
            <button>Submit</button>
        </form>
)}

export default Form;