/* eslint-disable react/prop-types */
import {IF} from '../url'
import { FaUser, FaClock, FaEllipsisH } from "react-icons/fa";

const HomePosts = ({post}) => {
  return (


<div className="w-full flex mt-8 space-x-4 bg-gray-900 text-white rounded-md p-4 shadow-lg border-l-4 border-green-500">
    {/* left */}
    <div className="flex flex-col w-full">
        <h1 className="text-3xl font-extrabold mb-2 text-green-500">{post.title}</h1>
        <div className="flex mb-2 text-xs text-gray-400 items-center justify-between">
            <div className="flex items-center">
                <FaUser className="mr-1" />
                <p className="font-semibold">@{post.username}</p>
            </div>
            <div className="flex items-center space-x-2">
                <FaClock className="mr-1" />
                <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
                <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
            </div>
        </div>
        <p className="text-base text-gray-200 mb-4">{post.desc.slice(0, 200)} ...<span className="text-green-500 cursor-pointer hover:text-green-400">Read more</span></p>
    </div>
    {/* right */}
    <div className="flex items-center">
        <FaEllipsisH className="text-2xl cursor-pointer hover:text-green-400" />
    </div>
</div>
  )
}

export default HomePosts

