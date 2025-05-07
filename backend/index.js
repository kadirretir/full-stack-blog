import express from 'express'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import webHookRouter from './routes/webhook.route.js'
import connectToDb from './models/db.js'
import mongoose from 'mongoose'
import { clerkMiddleware } from '@clerk/express'
import cors from "cors"

const PORT = 3000;
const app = express()
app.use(cors(process.env.CLIENT_URL))
app.use(clerkMiddleware())
app.use('/webhooks', webHookRouter)
app.use(express.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/auth-state", (req,res) => {
  const auth = req.auth;
  res.json(auth)
})

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/comments', commentRoutes)


app.use((error,req,res,next) => {
    res.status(error.status || 500)
    console.log(error)
    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack
    })
})


// app.get('/protect', (req, res) => {
//   const { userId } = req.auth;
//   if(!userId) {
//     return res.status(401).json("Not Authenticated!")
//   }

//   res.status(200).json("Authenticated!")
// })

app.listen(3000, async () => {
  if (mongoose.connection.readyState !== 1) {
    await connectToDb();
  }
  console.log(`Server is running at ${PORT}`)
})