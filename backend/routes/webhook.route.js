import express from 'express'
const router = express.Router()
import bodyParser from "body-parser";
import { clerkWebHook } from '../controllers/webhook.controller.js';


router.post("/clerk", bodyParser.raw({ type: 'application/json' }), clerkWebHook)

export default router;
