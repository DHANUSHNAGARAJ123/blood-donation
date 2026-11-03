import express from "express";
import { postDonate } from "../controllers/donateController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/donar").post(postDonate);


export default router;