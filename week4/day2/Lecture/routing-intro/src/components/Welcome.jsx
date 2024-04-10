import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
const Welcome = (props) => {
    console.log(useParams());
    const {fName, lName} = useParams()
    return (
        <div>
            <h1>Hello {fName} {lName}</h1>
        </div>
)}

export default Welcome;