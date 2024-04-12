import Image from '../models/image.model.js';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = (file) => {
    return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.v2.uploader.upload_stream({folder: 'image_upload', public_id: file.originalname}, (error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    });
}
export const uploadImage = async (req, res) => {
    try{
        const result = await uploadToCloudinary(req.file);
        console.log(result);
        const image = {
            imageUrl: result.url,
            name: req.body.name
        }
        const newImage = await Image.create(image);
        return res.status(201).json(newImage);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}
export const getImages = async (req, res) => {
    try{
        const images = await Image.find();
        return res.status(200).json(images);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
}