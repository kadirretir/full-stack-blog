import { Link } from "react-router"
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

const Home = () => {
  return (
  <div className="mt-4 flex flex-col gap-4">
       {/* breadcrumb */}
       <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
       </div>
    {/* introduction */}
    <div className="flex items-center justify-between">
        {/* Titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit
            sed do eiusmod.</p>
        </div>
        {/* Animated Button */}
        <Link to="/write" className="hidden md:block relative">
            <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path 
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />

            <text>
                <textPath href="#circlePath" startOffset="0%">Write Your Story.</textPath>
                <textPath href="#circlePath" startOffset="50%">Share Your Idea</textPath>
            </text>

            </svg>
          <button className="bg-blue-800 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
          </button>
        </Link>
    </div>

    {/* Main Categories */}
    <MainCategories />
    {/* featured */}

    <FeaturedPosts />
    {/* postlist */}
    <div className="">
      <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
      <PostList />
    </div>
  </div>
  )
}

export default Home