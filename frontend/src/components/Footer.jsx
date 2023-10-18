

const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-gray-900 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
    <div className="flex flex-col text-green-400">
        <p>Featured Blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>
    </div>

    <div className="flex flex-col text-green-400">
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Posts</p>
    </div>

    <div className="flex flex-col text-green-400">
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Terms of Service</p>
    </div>
</div>
<p className="py-2 pb-6 text-center text-green-400 bg-gray-900 text-sm">All rights reserved @Web3 Chronicles 2023</p>
</>
    
  )
}

export default Footer