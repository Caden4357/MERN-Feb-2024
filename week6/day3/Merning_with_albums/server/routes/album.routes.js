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
router.get('/albums_before_2000', albumController.getAlbumsReleasedBefore2000)
router.get('/albums_after_2000', albumController.getAlbumsReleasedAfter2000)



export default router;