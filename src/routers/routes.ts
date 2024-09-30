import { Router } from "express";
import { getusers } from "../controllers/getusers";

const router = Router();

router.get('/getusers', getusers);

export default router;