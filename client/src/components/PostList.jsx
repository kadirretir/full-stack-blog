import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import PostListItem from "./PostListItem"
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchPosts = async (pageparam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/posts?page=${pageparam}&limit=2`)
  const data = await res.json()
  return data
}
const PostList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam  = 1}) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  })

  if (isFetching === "loading") return 'Loading...'

  if (status === "error") return 'An error has occurred: ' + error.message

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
    dataLength={allPosts.length} //This is important field to render the next data
    next={fetchNextPage}
    hasMore={!!hasNextPage}
    loader={<h4>Loading more posts...</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>All posts loaded.</b>
      </p>
    }
  >
     {allPosts.map((item, id) => {
    
            return (
       
                   <PostListItem
                   item={item}
                  key={id}
           />
     
            )
           })}
  </InfiniteScroll>
        
      

  )
}

export default PostList