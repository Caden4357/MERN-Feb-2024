import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/hello/${form.firstName}/${form.lastName}`);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => setForm({...form, firstName:e.target.value})} value={form.firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setForm({...form, lastName:e.target.value})} value={form.lastName}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;