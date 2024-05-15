import Image from "next/image";
import React from "react";
import welcome from '../../assets/Welcome_Image.jpg'
import todo_img  from "../../assets/todo_checklist.jpg"
import conversation from "../../assets/Converstation_Page.png"
const About = () => {
  return (
    <>
      <header className="about-page">
        <h1 className="text-center font-extrabold  text-[#f26a2f]">
          About us{" "}
        </h1>
      </header>
      <section className="welcome-section grid grid-cols-2 justify-center w-[80%] mx-auto gap-6">
        <div className="content  ">
        <h1 className="text-4xl">Welcome to our blog!</h1>
        <p className="text-sm">
          At our blog, we&apos;re dedicated to exploring the latest in
          technology and how it impacts our daily lives. Our mission is to
          provide you with insightful, engaging, and practical content that
          demystifies technology and helps you make the most of it in your
          routine.
        </p>
        </div>
        <div className="image">
          <Image src={welcome} width={700} height={700} alt="welcome img" />
        </div>
      </section>

      <section className="detail-about bg-[#f26a2f] grid grid-cols-2 justify-center items-center my-4">
        <div className="image flex justify-center ">
        <Image src={todo_img} width={400} height={200}  alt="img" className="rounded-md overflow-hidden"/>
        </div>
        <div className="content text-white flex flex-col gap-0">
          <h1 className="font-bold">What We Cover</h1>
          <h3>Our blog covers a wide spectrum of topics within the world of technology:</h3>
          <ul className=" ">
            <li>Tech Reviews: Get honest reviews of the latest gadgets, apps, and software.</li>
            <li>How-To Guides: Learn step-by-step instructions for setting up devices and solving tech issues.</li>
            <li>Industry Trends: Stay updated on the latest developments in tech, from AI to cybersecurity.</li>
            <li>Tips & Tricks: Discover useful tips to enhance your digital lifestyle.</li>
          </ul>
        </div>
      </section>
      <section className="approach-section mt-7">
        <h1 className="text-center font-extrabold text-3xl">Our Approach</h1>
        <p className="text-center w-[50%] mx-auto">We believe in simplifying technology for everyone. Our team of tech enthusiasts works hard to create content that is informative, accessible, and enjoyable to read. Whether you&apos;re a tech novice or a seasoned pro, there&apos;s something here for you.</p>
      </section>

      <section className="convertion-section grid grid-cols-2 justify-center items-center my-4 w-[80%] mx-auto">
  
        <div className="content  flex flex-col gap-0 ">
          <h1 className="font-bold text-2xl">Join the Conversation</h1>
          <h3>We value your input and love hearing from our readers:</h3>
          <ul className=" ">
            <li>Subscribe to our newsletter to receive our latest articles directly in your inbox.</li>
            <li>Follow us on social media to stay connected and engage with our community.</li>
            <li>Leave comments on our posts to share your thoughts and ideas.</li>
          </ul>
        </div>
        <div className="image flex justify-center ">
        <Image src={conversation} width={400} height={200}  alt="img" className="rounded-md overflow-hidden"/>
        </div>
      </section>
    </>
  );
};

export default About;
