// recipientRoute.js
import express from "express";
import { postRecipient } from "../controllers/recipientController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/recipient").post(postRecipient);


export default router;