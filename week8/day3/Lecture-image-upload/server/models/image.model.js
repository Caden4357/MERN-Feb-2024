import {Schema, model} from 'mongoose';

const imageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }

}, {timestamps: true});

export default model('Image', imageSchema);