import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
const ColorAndNumber = (props) => {
    const {color, number} = useParams()
    return (
        <div>
            <h2 style={{backgroundColor:color}}>your lucky number is {number}</h2>
        </div>
)}

export default ColorAndNumber;