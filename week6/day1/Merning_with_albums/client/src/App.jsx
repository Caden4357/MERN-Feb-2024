import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import AlbumDetails from './views/AlbumDetails'
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/albums/:id/details' element={<AlbumDetails/>}/>
      </Routes>
    </>
  )
}

export default App
