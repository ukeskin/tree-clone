import express from "express";
import { updateUser } from "../controllers/user.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

export default router;
