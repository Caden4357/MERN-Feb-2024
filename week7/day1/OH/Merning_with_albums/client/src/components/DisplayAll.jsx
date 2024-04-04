import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const {albums, setAlbums} = props;


    const getAllAlbums = () => {
        axios.get('http://localhost:8000/api/albums')
        .then((res) => {
            console.log(res.data);
            setAlbums(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAllAlbums()
    }, [])

    const albumsBefore2000 = () => {
        axios.get('http://localhost:8000/api/albums_before_2000')
            .then((res) => {
                console.log(res.data);
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const albumsAfter2000 = () => {
        axios.get('http://localhost:8000/api/albums_after_2000')
            .then((res) => {
                console.log(res.data);
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <div>
                <button onClick={albumsBefore2000}>Pre 2000</button>
                <button onClick={albumsAfter2000}>Post 2000</button>
                <button onClick={getAllAlbums}>Reset</button>
            </div>
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