import { useAuth, useUser } from '@clerk/clerk-react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import {useMutation} from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Upload from '../components/Upload';


const Write = () => {
 const {isLoaded, isSignedIn} = useUser()
 const [value, setValue] = useState("")
 const [img, setImg] = useState("")
 const [video, setVideo] = useState("")
 const [cover, setCover] = useState("")
 const [progress, setProgress] = useState(0)
 const navigate = useNavigate()
 const {getToken} = useAuth();

 useEffect(() => {  
  img && setValue(prev => prev+`<p><image src="${img}" /></p>`)
 }, [img])

 useEffect(() => {  
  video && setValue(prev => prev+`<p><iframe class="ql-video" src="${video}" /></p>`)
 }, [video])

 const mutation = useMutation({
  mutationFn: async (newPost) => {
   
    const token = await getToken();
    if (!token) throw new Error("No token");

    return await axios.post(
      `${import.meta.env.VITE_API_URL}/posts/posts`,
      newPost,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  },
  onSuccess: (data) => {
    navigate(`/${data.data.slug}`)
    toast.success("Post successfuly has been created")
  },
  onError: (error) => {
    console.error("Hata oluştu:", error);
  }
});




//  if(!isLoaded) {
//   return <div className="">Loading...</div>
//  }

//  if(isLoaded && !isSignedIn) {
//   return <div className="">You are not signed in...</div>
//  }

const handleSubmit = (e) => {
e.preventDefault();
const formData = new FormData(e.target)
const data = {
  img: cover.filePath || "" ,
  title: formData.get('title'),
  category: formData.get('category'),
  desc: formData.get('desc'),
  content: value
}


mutation.mutate(data)
}



return (
<div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
  <h1 className='text-xl font-light'>Create a New Post</h1>
  <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6'>
     <Upload type="image" setProgress={setProgress} setCover={setCover}>
    <button type='button' className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>
      Add a cover image
      </button>

      </Upload> 

 

    <input name='title' className='text-4xl font-semibold bg-transparent outline-none' type="text" placeholder='My Awesome Story' />
    <div className="flex items-center gap-4">
      <label htmlFor="" className='text-sm'>Choose a category:</label>
      <select name="category" id="" className='p-2 rounded-xl bg-white shadow-md'>
        <option value="general">General</option>
        <option value="web-design">Web Design</option>
        <option value="development">Development</option>
        <option value="databases">Databases</option>
        <option value="seo">Search Engines</option>
        <option value="marketing">Marketing</option>
      </select>
    </div>
    <textarea className='p-4 rounded-xl bg-white shadow-md' name="desc" placeholder='A Short Description' />
    <div className="flex">
      <div className="flex flex-col gap-2 mr-2">
      <Upload type="image" setProgress={setProgress} setCover={setImg}>
      🖼

      </Upload>

   <Upload type="video" setProgress={setProgress} setCover={setVideo}>

   📹
      </Upload>

      </div>
      <ReactQuill 
      value={value} 
      onChange={setValue}
      theme="snow"
      readOnly={0 < progress && progress < 100}
        className='flex-1 rounded-xl bg-white shadow-md' />
        </div>
    <button disabled={mutation.isPending || (0 < progress && progress < 100)} className='bg-blue-800 text-white font-medium rounded-xl mt-4 py-2 disabled:cursor-not-allowed disabled:bg-blue-400 w-36'>
      {mutation.isPending ? "Loading..." : "Send"}
    </button>
    {"progress:" + progress }
    {mutation.isError && (
      <span>{mutation.error.message}</span>
    )}
  </form>
</div>
)
  
}

export default Write