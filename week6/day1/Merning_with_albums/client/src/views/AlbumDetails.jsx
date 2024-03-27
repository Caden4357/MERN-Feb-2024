import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumDetails = (props) => {
    const [album, setAlbum] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/albums/${id}`)
            .then((res) => {
                console.log(res);
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <Nav title={album.title}/>
            <div>
                <h2>Album: {album.title}</h2>
                <h2>Artist: {album.artist}</h2>
                <h2>Genre: {album.genre}</h2>
                <h2>Release Year: {album.year}</h2>
                <h2>Is Explicit: {album.isExplicit? 'Yes': 'No'}</h2>
            </div>
        </div>
)}

export default AlbumDetails;