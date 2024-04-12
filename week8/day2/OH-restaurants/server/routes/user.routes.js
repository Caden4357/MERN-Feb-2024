import {Router} from 'express';
import * as userController from '../controllers/user.controller.js';
import authenticate from '../config/jwt.config.js';
const router = Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/get_logged_in_user', authenticate, userController.getLoggedInUser)
router.post('/logout', userController.logout)

export default router;