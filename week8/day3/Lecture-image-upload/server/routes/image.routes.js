import {Router} from 'express';
import * as imageController from '../controllers/image.controller.js';
import multer, {memoryStorage} from 'multer';
const storage = memoryStorage();
const upload = multer({storage});
const router = Router();

router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/images', imageController.getImages);

export default router;