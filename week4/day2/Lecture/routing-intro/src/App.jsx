import './App.css'
import About from './components/About'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
function App() {

  return (
    <>
        <h1>React Router</h1>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hello/:fName/:lName' element={<Welcome/>}/>
        </Routes>
    </>
  )
}

export default App
