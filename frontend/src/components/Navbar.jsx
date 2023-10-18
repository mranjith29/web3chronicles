import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
    <div className="bg-gray-900 flex items-center justify-between px-6 md:px-[200px] py-4 text-white">
    {/* Logo and Site Title */}
    <div className="flex items-center space-x-4">
        <img src="/btc.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl md:text-2xl font-extrabold"><Link to="/">Web 3 Chronicles</Link></h1>
    </div>
    
    {/* Search Bar */}
    {path === "/" && (
        <div className="flex items-center space-x-4">
            <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-4 py-2 bg-gray-700 text-white rounded-md w-60 md:w-80" placeholder="Search a post" type="text"/>
            <button onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Search</button>
        </div>
    )}
    
    {/* Navigation Links */}
    <div className="hidden md:flex items-center justify-center space-x-6">
        {user ? <Link to="/write" className="text-lg hover:text-gray-300">Write</Link> : <Link to="/login" className="text-lg hover:text-gray-300">Login</Link>}
        {user ? 
            <div onClick={showMenu} className="relative cursor-pointer">
                <p className="text-lg hover:text-gray-300"><FaBars/></p>
                {menu && <Menu/>}
            </div> : <Link to="/register" className="text-lg hover:text-gray-300">Register</Link>}
    </div>
    
    {/* Mobile Menu Icon */}
    <div onClick={showMenu} className="md:hidden text-3xl cursor-pointer">
        <FaBars />
        {menu && <Menu/>}
    </div>
</div>


  )
}

export default Navbar 