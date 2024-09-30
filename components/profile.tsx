import React from 'react'
import Image from 'next/image'
import img from './img.jpg'

const profile = () => {
  return (
    <div>
       <div className='flex'>
        <header>
          <div className=' relative text-pink-900 p-10' >
            <h2 className=' font-medium  text-5xl my-20'> Hello  Its Me!  <br/> NEHA SHAHZAD.</h2>
            <p className='px-2.5 py-2.5  text-3xl max-w-screen-md mt-10 '> Im an advanced developer with expertise in TypeScript, Next.js, HTML, and CSS. Currently working on dynamic projects like Resume Builder.</p>
          
          </div>
          </header>
          
        <div className=''>
        <Image className ="relative top-12 w-[25vw] rounded-full h-[25vw] object-cover left-56 cursor-pointer ease-in-out[0.4s]]"
        src={img}
        alt='profile' />
        </div>
        </div>
    </div>
  )
}

export default profile
