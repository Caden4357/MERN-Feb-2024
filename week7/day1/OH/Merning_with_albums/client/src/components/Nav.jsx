import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    const {title} = props
    return (
        <header>
            <nav className='d-flex justify-content-around border'>
                <div className="left">
                    <Link className='btn btn-primary' to={'/'}>Catalog</Link>
                    <br />
                    <Link className='btn btn-primary' to={'/create'}>Add An Album</Link>
                </div>
                <div className="right">
                    <h1>{title}</h1>
                </div>
            </nav>
        </header>
)}

export default Nav;