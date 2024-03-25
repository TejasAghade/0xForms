import express from 'express';
import {
    login,
    signup
} from '../controllers/auth_controller.js';

const authRoutes = express.Router();

authRoutes.get("/login", login);
authRoutes.get("/signup", signup);


export default authRoutes;