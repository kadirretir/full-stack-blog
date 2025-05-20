import express from 'express'
const router = express.Router()
import {getPosts, getPost, createPost, uploadAuth, deletePost, featurePost} from '../controllers/post.controllers.js'
import increaseVisit from '../middlewares/increaseVisit.js'

router.get("/upload-auth", uploadAuth)

router.get("/posts", getPosts)
router.get("/:slug", increaseVisit, getPost)
router.post("/posts", createPost)
router.delete("/:id", deletePost)
router.patch("/feature", featurePost)






export default router