import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import AlbumDetails from './views/AlbumDetails'
// import Create from './views/Create'
import Edit from './views/Edit'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/albums/:id/details' element={<AlbumDetails/>}/>
        {/* <Route path='/create' element={<Create/>}/> */}
        <Route path='/albums/:id/edit' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
