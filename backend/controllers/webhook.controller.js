import { Webhook } from "svix";
import User from '../models/userModel.js'



export const clerkWebHook = async (req,res) => {
     const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

     if(!WEBHOOK_SECRET) {
        throw new Error("WEBHOOK SECRET is needed")
     }
     
     const payload = req.body;
     const headers = req.headers;
     const wh = new Webhook(WEBHOOK_SECRET);
     let event;
     try {
        event = wh.verify(payload, headers);
     } catch (err) {
      console.log(err, "error")
         return res.status(400).json({
            message: "Webhook verification failed"
         });
     }

   if(event.type === "user.created") {
      console.log(event.data.id, "AASFASFASFASAFAFAS")
      const isExist = await User.findOne({clerkUserId: event.data.id})

      if(!isExist) {
        const newUser = new User({
         clerkUserId: event.data.id,
         username: event.data.username || event.data.email_addresses[0].email_address,
         email: event.data.email_addresses[0].email_address,
         img: event.data.profile_img_url  
     })

     await newUser.save();
      }

   }
   return res.status(200).json({
      message: "Webhook received"
   })
 
}