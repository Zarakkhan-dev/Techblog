import React from 'react'
import Image from 'next/image'
import header_Image from "../../assets/Header_Img.jpg"
import Link from 'next/link'

const Header = () => {
  return (
   <>
   <header className='Home-Page mt-12'>
    <div className="section-content flex flex-col  gap-5">  
       <div className="content">
        <h1 className='text-4xl font-semibold text-[#fc6c2d] '> <span className='text-header-content'>Unveil Inspiration</span>: Explore a World of Insights & Ideas</h1>
        <p className='text-sm'>
        Howdy, folks! where curiosity meets creativity. Dive into captivating stories, expert tips, and thought-provoking perspectives curated just for you. Whether you&apos;re a seasoned enthusiast or a curious explorer, our blog is your gateway to discovering new passions and expanding your horizons. Join us on this journey of enlightenment and empowerment. Start exploring today!
        </p>
        <div className="Visit-blog-button">
        <Link href="/blog">        
        <button className='bg-[#fc6c2d] hover:bg-[#f26a2f] py-3 px-[10vh] rounded-3xl text-white font-semibold'>Visit Blog</button>
        </Link>

        </div>
        </div>
        <div className="Social-media-icon flex  gap-7 text-lg">
        <i className="fa-brands fa-linkedin-in border border-1 border-[#a65431]  px-3 py-2.5 rounded-full hover:bg-[#e85b1e] hover:text-white text-[#e85b1e] cursor-pointer" ></i>
        <i className="fa-brands fa-facebook-f border border-1 border-[#a65431]   px-3.5 py-2.5 rounded-full hover:bg-[#e85b1e] hover:text-white text-[#e85b1e] cursor-pointer"></i>
        <i className="fa-brands fa-whatsapp border border-1 border-[#a65431]   px-3 py-2.5 rounded-full hover:bg-[#e85b1e] hover:text-white text-[#e85b1e] cursor-pointer"></i>
        </div>
     </div>
    <div className="header-image flex items-center">
        <Image src={header_Image}  width={600} height={500} alt='Header-image'/>
    </div>
   </header>
   </>
  )
}

export default Header
