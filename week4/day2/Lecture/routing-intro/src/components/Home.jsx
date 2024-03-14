import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
    return (
        <div>
            <h1>HOME COMPONENT</h1>
            <Link to={'/about'}>About</Link>
        </div>
)}

export default Home;