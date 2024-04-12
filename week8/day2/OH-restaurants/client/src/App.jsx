import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import AddRestaurant from './components/AddRestaurant'
function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/add_restaurant' element={<AddRestaurant />} />
    </Routes>
  )
}

export default App
