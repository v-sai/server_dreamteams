import express from "express";
const router = express.Router();

import user from "./user.routes.js";

router.use("/", user);

//generateteams/:id

export default router;
