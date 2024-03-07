import './App.css'
import DisplayUsers from './components/DisplayUsers'
import Form from './components/Form'
import { useState } from 'react'
function App() {
  const [userList, setUserList] = useState([])
  return (
    <>
      <Form userList={userList} setUserList={setUserList}/>
      <DisplayUsers userList={userList}/>
    </>
  )
}

export default App
