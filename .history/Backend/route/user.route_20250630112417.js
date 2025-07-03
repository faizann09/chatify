import express from "express";
const router = express.Router();
import {signup,login} from "../controller/user.controller.js";

router.post("/signup",signup)

router.post()

export default router;