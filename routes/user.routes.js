import express from "express";
const router = express.Router();

import { ADD_USER, DELETE_ALL_USERS, DELETE_USER, GET_ALL_USERS, GET_SINGLE_USER } from "../components/user.component.js";


router.get("/users", GET_ALL_USERS);
router.get("/user/:id", GET_SINGLE_USER);
router.post("/adduser", ADD_USER);
router.delete("/deleteall", DELETE_ALL_USERS);
router.delete("/delete/:id", DELETE_USER);

export default router;
