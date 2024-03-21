import { Router } from "express";
import showController from "../controllers/show.controller.js";
// Creating a router variable for ease of use
const router = Router();

// All routes with the /users path
router.route("/shows")
    .get(showController.getAllShows)
    .post(showController.createShow);
    
export default router;
