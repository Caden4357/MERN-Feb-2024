import './App.css'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
function App() {

  return (
    <>
      <h1>Routing Intro</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hello/:name' element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
