import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-center'>
      <p className='my-4 font-bold text-xl'> <Link to='' className='text-[#0099ff]'>Privacy Policy</Link>  | Build your own <br /> by our
       <Link to='' className='text-[#0099ff]'> FindMe</Link> </p>
    </div>
  )
}

export default Footer