import React, {useState} from 'react';
import Nav from '../components/Nav'
import DisplayAll from '../components/DisplayAll';
import Create from '../components/Create';
const Home = (props) => {
    const [albums, setAlbums] = useState([])
    return (
        <div>
            <Nav title={'Album Catalog'}/>
            <DisplayAll albums={albums} setAlbums={setAlbums}/>
            <Create albums={albums} setAlbums={setAlbums}/>
        </div>
)}

export default Home;