import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [image, setImage] = useState({
    imageUrl: '',
    name: ''
  })
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/images')
      .then(res => {
        console.log(res);
        setImages(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  const changeHandler = (e) => {
    if (e.target.name === 'image') {
      setImage({
        ...image,
        imageUrl: e.target.files[0]
      })
    } else {
      setImage({
        ...image,
        [e.target.name]: e.target.value
      })
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', image.name);
    formData.append('image', image.imageUrl);
    axios.post('http://localhost:8000/api/upload', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <h1>Image Upload</h1>
      <form encType='multipart/form-data' onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Name" onChange={changeHandler} />
        <input type="file" name="image" onChange={changeHandler} />
        <input type="submit" value="Upload" />
      </form>
      {
        images.map((image) => (
            <div key={image._id}>
              <img style={{width:'200px'}} src={image.imageUrl} alt={image.name} />
              <p>{image.name}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
