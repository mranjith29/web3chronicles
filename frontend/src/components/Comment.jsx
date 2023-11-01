import axios from "axios"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { URL } from "../url"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Comment = ({c,post}) => {

  const {user}=useContext(UserContext)
  const deleteComment=async(id)=>{
    try{
      await axios.delete(URL+"/api/comments/"+id,{withCredentials:true})
      window.location.reload(true)
    }
    catch(err){
      console.log(err)
    }
  }
  // console.log(post.userId)
  // console.log(user._id)
  // console.log(post)
  // console.log(user)
  return (
    <div className="px-4 py-3 bg-gray-900 rounded-lg my-2 text-white border-l-4 border-green-500">
    <div className="flex items-center justify-between">
        <h3 className="font-bold text-green-400">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
            <p className="text-gray-400">{new Date(c.updatedAt).toLocaleDateString()}</p>
            <p className="text-gray-400">{new Date(c.updatedAt).toLocaleTimeString()}</p>
            {user?._id === c?.userId &&
                <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer text-red-500 hover:text-red-600" onClick={() => deleteComment(c._id)}>
                        <MdDelete />
                    </p>
                </div>
            }
        </div>
    </div>
    <p className="mt-2 text-gray-300">{c.comment}</p>
</div>

  )
}

export default Comment