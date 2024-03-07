import { useState } from 'react';

const Form = (props) => {
    const { userList, setUserList } = props
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState(0)

    const submitHandler = (e) => {
        // stop the refreshing of the page
        e.preventDefault()
        // package up the user form data into an object (to send to the backend eventually not now)
        const userObject = {
            username,
            email,
            password,
            age
        }
        // add this userObject to userList
        // ! the format for updating the userlist or any array of objects is gonna be spread out the original list then add the new object make sure your form data is an object
        setUserList([...userList, userObject]) 
        console.log('LINE 20: ', userObject);
        // clear all the inputs of the form
        setUsername('')
        setEmail('')
        setPassword('')
        setAge(0)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Username:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                {
                    username.length < 3 ?
                        <p>Username must be at least 3 characters</p> :
                        null
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                {
                    email.length < 3 ?
                        <p>Email must be atleast 3 characters</p> :
                        null
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                {
                    password.length < 8 ?
                        <p>Password must be atleast 8 characters</p> :
                        null
                }
            </div>
            <div>
                <label>Age:</label>
                <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
                {
                    age < 13 ?
                        <p>Must be 13 or older to make an account</p> :
                        null
                }
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Form;