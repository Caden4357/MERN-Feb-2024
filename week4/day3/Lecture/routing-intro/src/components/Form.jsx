import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const navigate = useNavigate()
    const [color, setColor] = useState('')
    const [number, setNumber] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${color}/${number}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Whats your favoirte color?</label>
                    <input type="text" onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label>Whats your lucky number?</label>
                    <input type="number" onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
)}

export default Form;