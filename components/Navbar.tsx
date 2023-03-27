import React from "react"
import Image from 'next/image'
import data from '../data.json'
import {AiFillCheckCircle} from 'react-icons/ai'

export default function Navbar() {

  return (
    <div  className=' fixed left-0 top-10 w-full z-20  '>
        <div style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} className='max-w-5xl m-auto flex justify-between items-center text-white shadow border-2 border-blue-900 rounded-full'>
            
            <div className="container flex items-center mx-auto p-3">
                <Image
                  priority
                  className='rounded-full'
                  alt={data.name}
                  src={data.avatar}
                  width={50}
                  height={50}
                />
            </div>

            <div className="container flex items-center space-x-2">
              <h2 className="mx-auto text-2xl font-bold text-black">{data.name}</h2>
            </div>

            <div className="container flex items-center space-x-2 ">
              <h2 className="mx-auto text-2xl font-bold">...</h2>
            </div>

           
        </div>
    </div>
  )
}

