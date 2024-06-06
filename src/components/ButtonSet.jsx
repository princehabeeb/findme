import React from 'react'
import { Link } from 'react-router-dom'
import { PiButterfly } from "react-icons/pi";
import { VscCoffee } from "react-icons/vsc";
import { AiOutlineDiscord } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";

const ButtonSet = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center'>
      <Link to='' className='py-4 px-6 bg-[#1185fe]
       text-white font-bold w-[80%] md:w-[250px] mt-4 rounded
       flex items-center justify-center text-xl'>
      <PiButterfly className='mx-2' /> BlueSky
      </Link>
      <Link to='' className='py-4 px-6 bg-[#ffdd00] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <VscCoffee className='mx-2' /> Buy me a Cofee
      </Link>
      <Link to='' className='py-4 px-6 bg-[#5865f2] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <AiOutlineDiscord className='mx-2' /> Discord
      </Link>
      <Link to='' className='py-4 px-6 bg-[#2457f2] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <MdOutlineEmail className='mx-2' /> Email
      </Link>
      <Link to='' className='py-4 px-6 bg-[#1877f2] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <LuFacebook  className='mx-2' /> Facebook
      </Link>
      <Link to='' className='py-4 px-6 bg-[#000000] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <FaXTwitter  className='mx-2' /> Twitter
      </Link>
      <Link to='' className='py-4 px-6 bg-[#1400cb] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <IoLogoInstagram  className='mx-2' /> Instagram
      </Link>
      <Link to='' className='py-4 px-6 bg-[#25d366] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <IoLogoWhatsapp  className='mx-2' /> Watsapp
      </Link>
      <Link to='' className='py-4 px-6 bg-[#3faee8] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <PiTelegramLogoDuotone  className='mx-2' /> Telegram
      </Link>
      <Link to='' className='py-4 px-6 bg-[#010101] text-white 
      font-bold w-[80%] md:w-[250px] mt-4 flex items-center justify-center rounded text-xl'>
      <IoLogoGithub  className='mx-2' /> github
      </Link>
    </div>
  )
}

export default ButtonSet