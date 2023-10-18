import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      console.log(res.data)
      setUser(res.data)
      navigate("/")

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
            <h1 className="text-xl md:text-2xl font-extrabold"><Link to="/">Web 3 Chronicles</Link></h1>
        </div>
        <h3 className="text-lg"><Link to="/register">Register</Link></h3>
    </div>
    <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] bg-gray-700 p-8 rounded-lg">
            <h1 className="text-2xl font-bold text-left">Log in to your account</h1>
            <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-0" type="text" placeholder="Enter your email" />
            <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-0" type="password" placeholder="Enter your password" />
            <button onClick={handleLogin} className="w-full px-4 py-3 text-lg font-bold bg-green-400 rounded-lg hover:bg-green-500 transition duration-300">Log in</button>
            {error && <h3 className="text-red-500 text-sm mt-2">Something went wrong</h3>}
            <div className="flex justify-center items-center space-x-3 text-sm">
                <p>New here?</p>
                <p className="text-gray-500 hover:text-white"><Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
</div>

    <Footer/>
</>

    
  )
}

export default Login