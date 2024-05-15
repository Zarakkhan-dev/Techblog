import React, { useState } from 'react'
import Image from 'next/image'
import img  from "../../assets/Character_Contact_Image.jpg"
import {ContactFormType} from "../Type/Type"
import axios from 'axios'
import {  toast } from 'react-toastify';
import {ToastContainer} from './toastcontainer'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const [formdata,Setformdata] = useState<ContactFormType> ({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const handler=(e:React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {name,value} = e.target;
    Setformdata(()=>{
      return {
        ...formdata,
        [name]:value
      }
    })
  }
  const submission= async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const response = await axios.post("api/email" ,formdata);
    alert("Our Team will soon contact with you ",response.data.name)
    toast.success('🦄Email send successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  
      });
    Setformdata({
      name:"",
      email:"",
      subject:"",
      message:""
      
    })
    }
  return (
    <>
    <header className='Contact-Page grid grid-cols-2 justify-center items-center p-3 w-[80%] m-auto mt-9'>
    <div className="Image">
    <Image src={img} width={700} height={700} alt='contactus Logo'/>
    </div>
    <div className="Contact-form flex flex-col w-[80%] ">
        <h1 className='text-2xl font-bold text-[#f26a2f]'>Contact us</h1>
        <p className='text-sm mb-6'>We&apos;re here to help. Reach out to us with any questions or inquiries.</p>
        <form className='flex flex-col   gap-5' onSubmit={submission}>
            <input type="text" name="name"  placeholder='Full Name ' onChange={handler} value={formdata.name}/>
            <input type="email" name="email" id="" placeholder='Email' onChange={handler} value={formdata.email}/>
            <input type="text" name="subject" id="" placeholder="Subject" onChange={handler}  value={formdata.subject}/>
            <textarea name="message" id="" rows={4} cols={40} placeholder='Messsage here...' onChange={handler} value={formdata.message}></textarea>
            <div className="contact-button">
            <button className='bg-[#f26a2f] hover:bg-[#b35831] text-white font-bold text-lg  py-2 px-5 rounded-md'>Send Message </button>
            </div>
        </form>
    </div>
    </header>
    <ToastContainer/>
    </>
  )
}

export default Contact
