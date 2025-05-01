import { Link } from "react-router"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* Image */}
                <div className="md:hidden xl:block xl:w-1/3">
                    <Image 
                    src="postImg.jpeg"
                    className="rounded-2xl object-cover"
                    />
                </div>
        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written By</span>
                <Link className="text-blue-800" to="/test">Kadir Üretir</Link>
                <span>on</span>
                <Link className="text-blue-800" to="/test">Web Design</Link>
                <span>2 Days Ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
<Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>

        </div>


    </div>
  )
}

export default PostListItem