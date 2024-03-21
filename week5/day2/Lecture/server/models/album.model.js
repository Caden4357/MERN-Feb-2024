import { Schema, model } from "mongoose";

const albumSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 characters'],
        maxLength: [50, 'Title must be at most 50 characters']
    },
    artist:{
        type: String,
        required: [true, 'Artist is required'],
        minLength: [3, 'Artist must be at least 3 characters'],
        maxLength: [50, 'Artist must be at most 50 characters']
    },
    year:{
        type: Number,
        required: [true, 'Year is required'],
        min: [1900, 'Year must be at least 1900'],
        max: [2022, 'Year must be at most 2022']
    },
    genre:{
        type: String,
        required: [true, 'Genre is required'],
        minLength: [3, 'Genre must be at least 3 characters'],
        maxLength: [50, 'Genre must be at most 50 characters']
    },
    isExplicit:{
        type: Boolean,
        required: [true, 'isExplicit is required']
    }
}, {timestamps: true})
const Album = model('Album', albumSchema);
export default Album;