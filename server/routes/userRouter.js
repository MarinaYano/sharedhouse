import express from 'express';
import { checkLoggedIn, getPostsByUsername, login, logout, signup } from '../controller/userController.js';

const router = express.Router();

router.get("/checkLoggedIn", checkLoggedIn);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/userposts", getPostsByUsername);

export default router;