import Album from "../models/album.model.js";


async function createAlbum(req, res){
    try{
        const album = await Album.create(req.body);
        // 201 for successful posts requests
        return res.status(201).json(album);
    }
    catch(err){
        return res.status(500).json(err);
    }
}
async function getAllAlbums(req, res){
    try{
        const allAlbums = await Album.find()
        // 200 for successful get req
        return res.status(200).json(allAlbums);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

async function getOneAlbumById(req, res){
    try{
        const id = req.params.id
        const album = await Album.findById(id)
        return res.status(200).json(album);
    }
    catch(err){
        return res.status(500).json(err);
    }
}
async function deleteById(req, res){
    try{
        const id = req.params.id
        await Album.deleteOne({ _id: id})
        return res.status(200).json({message:'Successfully deleted one album'});
    }
    catch(err){
        return res.status(500).json(err);
    }
}
async function updateAlbumById(req, res){
    try{
        const id = req.params.id
        const updatedAlbum = await Album.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
        return res.status(200).json(updatedAlbum);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

export { createAlbum, getAllAlbums, getOneAlbumById, deleteById, updateAlbumById };