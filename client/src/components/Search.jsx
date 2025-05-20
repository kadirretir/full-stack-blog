import { useLocation, useNavigate, useSearchParams } from "react-router"

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();


  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      const query = e.target.value;

      if(location.pathname === "/posts") {
       setSearchParams({...Object.fromEntries(searchParams), search: query})
      } else {
        navigate(`/posts?search=${query}`)
      }
    }
  }
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <input type="text" placeholder="Search a post..." className="bg-transparent"
        onKeyDown={handleKeyPress}
        />
        
        </div>
  )
}

export default Search