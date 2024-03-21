import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
const Welcome = (props) => {
    const {name} = useParams()
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
)}

export default Welcome;