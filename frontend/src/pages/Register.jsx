import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'


const Register = () => {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
      
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }

  

  return (
    <>
   <div className="bg-gray-900 text-white">
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <div className="flex items-center space-x-2">
            <img src="/btc.png" alt="Logo" className="h-8 w-8" /> {/* Add your logo here */}
            <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Web 3 Chronicles</Link></h1>
        </div>
        <h3><Link to="/login">Login</Link></h3>
    </div>
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4 text-left">Create an Account</h1>
            <input onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg mb-2 outline-none" type="text" placeholder="Enter your username" />
            <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg mb-2 outline-none" type="text" placeholder="Enter your email" />
            <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg mb-4 outline-none" type="password" placeholder="Enter your password" />
            <button onClick={handleRegister} className="w-full px-4 py-3 text-lg font-bold bg-green-400 text-black rounded-lg hover:bg-green-500 transition duration-300">Register</button>
            {error && <h3 className="text-red-500 text-sm mt-2">Something went wrong</h3>}
            <div className="flex justify-center items-center mt-4 text-sm text-gray-500">
                <p>Already have an account?</p>
                <Link to="/login" className="ml-2 hover:text-white">Login</Link>
            </div>
        </div>
    </div>
</div>

    <Footer/>
</>

    
  )
}

export default Register