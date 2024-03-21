import { Router } from "express";
import * as albumController from "../controllers/album.controllers.js";
const router = Router();
router.route('/album')
    .post(albumController.createAlbum);


export default router;