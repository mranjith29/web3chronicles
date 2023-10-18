/* eslint-disable react/prop-types */
import {IF} from '../url'

const ProfilePosts = ({p}) => {
  // console.log(p)
  return (
    <div className="w-full flex mt-8 space-x-4 bg-gray-900 text-white rounded-md p-6">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center overflow-hidden rounded-md">
        <img src={IF + p.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
        <h1 className="text-2xl font-bold mb-2">{p.title}</h1>
        <div className="flex mb-2 text-xs text-gray-400 items-center justify-between">
            <p>@{p.username}</p>
            <div className="flex space-x-2">
                <p>{new Date(p.updatedAt).toLocaleDateString()}</p>
                <p>{new Date(p.updatedAt).toLocaleTimeString()}</p>
            </div>
        </div>
        <p className="text-sm md:text-base">{p.desc.slice(0, 200)} ...Read more</p>
    </div>
</div>

  )
}

export default ProfilePosts