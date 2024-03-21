import './App.css'
import About from './components/About'
import Home from './views/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Form from './components/Form'
import ColorAndNumber from './components/ColorAndNumber'
import NotFound from './components/NotFound'
function App() {

  return (
    <>
      <h1>Routing Intro</h1>
      <BrowserRouter>
        <Form/>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hello/:name' element={<Welcome/>}/> 
          <Route path='/:color/:number' element={<ColorAndNumber/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
