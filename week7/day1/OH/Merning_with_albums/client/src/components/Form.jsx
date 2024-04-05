import React, {useState} from 'react';

const Form = ({album, setAlbum, submitHandler, changeHandler, errors}) => {
    // const {album, setAlbum, submitHandler, changeHandler, errors} = props
    return (
        <div>
        <form className='w-50 mx-auto' onSubmit={submitHandler}>
            <div>
                <label className='form-label'>Title:</label>
                <input
                    className='form-control'
                    type="text"
                    onChange={changeHandler}
                    value={album.title}
                    name='title'
                />
                {
                    errors.title ?
                        <p className='text-danger'>{errors.title.message}</p> :
                        null
                }
            </div>
            <div>
                <label className='form-label'>Artist:</label>
                <input
                    className='form-control'
                    type="text"
                    onChange={changeHandler}
                    value={album.artist}
                    name='artist'

                />
                {
                    errors.artist ?
                        <p className='text-danger'>{errors.artist.message}</p> :
                        null
                }
            </div>
            <div>
                <label className='form-label'>Year:</label>
                <input
                    className='form-control'
                    type="number"
                    onChange={changeHandler}
                    value={album.year}
                    name='year'

                />
                {
                    errors.year ?
                        <p className='text-danger'>{errors.year.message}</p> :
                        null
                }
            </div>
            <div>
                <label className='form-label'>Genre:</label>
                <input
                    className='form-control'
                    type="text"
                    onChange={changeHandler}
                    value={album.genre}
                    name='genre'

                />
                {
                    errors.genre ?
                        <p className='text-danger'>{errors.genre.message}</p> :
                        null
                }
            </div>
            <div>
                <label className='form-label'>Explicit:</label>
                <input
                    className=''
                    type="checkbox"
                    onChange={changeHandler}
                    checked={album.isExplicit}
                />
                {
                    errors.isExplicit ?
                        <p className='text-danger'>{errors.isExplicit.message}</p> :
                        null
                }
            </div>
            <button>Submit</button>
        </form>
    </div>
)}

export default Form;