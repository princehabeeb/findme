import React from 'react';
import { Link } from 'react-router-dom'

const Bio = () => {
  return (
    <div className='text-center'>
      <h1 className='text-5xl font-bold my-1'>FindMe</h1>
      <p className='text-xl mb-2'>Findme is an opensource option <br /> similar to  
      <Link to='https://linktr.ee/' className='text-[#0099ff]'> Linktree</Link> </p>
    </div>
  )
}

export default Bio