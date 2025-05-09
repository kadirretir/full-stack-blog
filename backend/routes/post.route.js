import express from 'express'
const router = express.Router()
import {getPosts, getPost, createPost, uploadAuth} from '../controllers/post.controllers.js'

router.get("/upload-auth", uploadAuth)

router.get("/posts", getPosts)
router.get("/:slug", getPost)
router.post("/posts", createPost)






export default router