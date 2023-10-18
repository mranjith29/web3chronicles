/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4 bg-gray-900 text-white rounded-md p-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center overflow-hidden rounded-md">
        <img src={IF + post.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <div className="flex mb-2 text-xs text-gray-400 items-center justify-between">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
                <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
                <p>{new Date(post.updatedAt).toLocaleTimeString()}</p>
            </div>
        </div>
        <p className="text-sm md:text-base">{post.desc.slice(0, 200)} ...Read more</p>
    </div>
</div>

  )
}

export default HomePosts

