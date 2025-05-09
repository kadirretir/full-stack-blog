import { Link } from "react-router"
import Image from "./Image"
import {format} from 'timeago.js'


const PostListItem = ({item}) => {
  const { content, desc, img, category, title, slug, createdAt, user } = item;

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
        {/* Image */}
        {img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to={`/${slug}`} className="text-4xl font-semibold">{title}</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written By</span>
                <Link className="text-blue-800" to="/test">{user.username}</Link>
                <span>on</span>
                <Link className="text-blue-800" to="/test">{category}</Link>
                <span>{format(createdAt)}</span>
            </div>
            {desc}

<Link to={`/${slug}`} className="underline text-blue-800 text-sm">Read More</Link>

        </div>


    </div>
  )
}

export default PostListItem