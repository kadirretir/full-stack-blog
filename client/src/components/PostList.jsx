import { useQuery } from "@tanstack/react-query"
import PostListItem from "./PostListItem"

const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/posts`)
  const data = await res.json()
}
const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts()
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

console.log(data)
  return (
    <div className="flex flex-col gap-12 mb-8">
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
    </div>
  )
}

export default PostList