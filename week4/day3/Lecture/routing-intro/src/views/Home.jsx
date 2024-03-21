import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Ad from '../components/Ad';
import Product from '../components/Products';
const Home = (props) => {
    return (
        <div>
            <h1>HOME COMPONENT</h1>
            <Link to={'/about'}>About</Link>
            <Ad/>
            <Product/>
        </div>
)}

export default Home;