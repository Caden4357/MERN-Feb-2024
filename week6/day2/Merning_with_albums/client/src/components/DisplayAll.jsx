import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/albums')
            .then((res) => {
                console.log(res.data);
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Explicit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map((album) => (
                            <tr key={album._id}>
                                <td>{album.title}</td>
                                <td>{album.artist}</td>
                                <td>{album.year}</td>
                                <td>{album.genre}</td>
                                <td>{album.isExplicit? 'Yes': 'No'}</td>
                                <td>
                                    <Link to={`/albums/${album._id}/details`}>Album Details</Link> | 
                                    <Link to={`/albums/${album._id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;