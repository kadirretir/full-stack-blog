import { useState } from "react" 
import Image from "./Image"
import {Link} from "react-router"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Navbar = () => {

  const [hamburger, setHamburger] = useState(false)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
            <Image
            alt={"logo"}
            w={32}
            h={32}
            className={"w-8 h-8"}
            src="logo.png"
            />
            <span>kadirblog</span>
        </Link>
        {/* MOBİLE BUTTON */}
        <div className='md:hidden'>
          <div 
          onClick={() => setHamburger(prev => !prev)}
          className="cursor-pointer text-3xl">
            {console.log(hamburger)}
            {hamburger ? "X" : "☰"}
          </div>

            {/* MOBİLE LINK LIST */}
        
                    <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 
                    transition-all ease-in-out ${hamburger ? "-right-0" : "-right-[100%]"}`}>

<a href="">Home</a>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/" >
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>

                    </div>
      
      
        </div>
        {/* DESKTOP */}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <SignedOut>
              <Link to="/login">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                  Login 👋
                </button>
              </Link>
         </SignedOut>
     
        </div>
    </div>
  )
}

export default Navbar