import express from 'express'
const router = express.Router()
import {getPosts, getPost, createPost, uploadAuth} from '../controllers/post.controllers.js'

router.get("/posts", getPosts)
router.get("/upload-auth", uploadAuth)
router.post("/posts", createPost)
router.get("/:slug", getPost)



export default router