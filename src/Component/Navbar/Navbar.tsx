import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
   <nav className='Navbar mx-2 my-4'>
        <div className="logo flex justify-center">
           Z-KBlog
        </div>
        <ul className=' text-xl  font-medium' >
            <li>
                <Link href="/" className='hover:bg-[#f26a2f] hover:text-white  py-1 px-4 rounded-md'>
                    Home
                </Link>
                <Link href="/blog" className='hover:bg-[#f26a2f] hover:text-white  py-1 px-4 rounded-md'>
                    blog
                </Link>
                <Link href="/aboutus" className='hover:bg-[#f26a2f] hover:text-white  py-1 px-4 rounded-md'>
                    About us
                </Link>
                <Link href="/contactus" className='hover:bg-[#f26a2f] hover:text-white  py-1 px-4 rounded-md'>
                Contact us 
                </Link>
            </li>
        </ul>
        <div className="MenuIcon hidden">
        <i className="fa-solid fa-bars"></i>
        </div>
   </nav>
   </>
  )
}

export default Navbar
