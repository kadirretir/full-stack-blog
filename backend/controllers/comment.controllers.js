import Comment from '../models/commentModel.js';
import User from '../models/userModel.js';


export const getPostComments = async (req,res) => {
const comments = await Comment.find({post: req.params.postId})
.populate("user", "username img")
.sort({createdAt: -1})

res.status(200).json(comments)
}

export const addComment = async (req,res) => {
const clerkUserId = req.auth.userId;
const postId = req.params.postId;

if(!clerkUserId) {
    return res.status(401).json({message: "Unauthorized"})
}

const user = await User.findOne({clerkUserId})


const newComment = new Comment({
    ...req.body, 
    user: user._id,
    post: postId,
})

const savedComment = await newComment.save()

setTimeout(() => {

}, 3000)
res.status(201).json(savedComment)

}

export const deleteComment = async (req,res) => {
    const clerkUserId = req.auth.userId;
const id = req.params.id;

if(!clerkUserId) {
    return res.status(401).json({message: "Unauthorized"})
}

 const isAdmin = req.auth.sessionClaims?.metadata?.role || "user"

    if(isAdmin === "admin") {
      await Comment.findByIdAndDelete(req.params.id)
      return res.status(200).json("Comment has been deleted")
    }


const user = await User.findOne({clerkUserId})

const deletedComment = await Comment.findOne({_id: id, user: user._id})


if(!deletedComment) {
    return res.status(403).json({message: "Unauthorized"})
}
await Comment.findByIdAndDelete(req.params.id)
res.status(200).json({message: "Comment deleted"})
}

