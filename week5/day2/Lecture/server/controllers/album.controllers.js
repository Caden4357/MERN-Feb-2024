import Album from "../models/album.model.js";


async function createAlbum(req, res){
    try{
        const album = await Album.create(req.body);
        return res.status(201).json(album);
    }
    catch(err){
        return res.status(500).json({error: err});
    }
}

export { createAlbum };