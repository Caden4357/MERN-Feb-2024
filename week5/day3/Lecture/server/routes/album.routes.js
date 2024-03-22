import { Router } from "express";
import * as albumController from "../controllers/album.controllers.js";
const router = Router();

router.route('/albums')
    .get(albumController.getAllAlbums)
    .post(albumController.createAlbum);
router.route('/albums/:id')
    .get(albumController.getOneAlbumById)
    .delete(albumController.deleteById)
    .put(albumController.updateAlbumById)


export default router;