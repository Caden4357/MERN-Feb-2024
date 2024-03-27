import React, {useState} from 'react';
import Nav from '../components/Nav'
import DisplayAll from '../components/DisplayAll';
const Home = (props) => {
    return (
        <div>
            <Nav title={'Book Catalog'}/>
            <DisplayAll/>
        </div>
)}

export default Home;