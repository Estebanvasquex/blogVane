import dataCards from '@/data';
import Image from 'next/image';
import React, { use, useEffect } from 'react'

interface Props{
  params: {id: string}
}


export default function page({params}: Props) {


  const currentPost = dataCards.find((post) => post.id === params.id)


  return (

    <section className="font-mono bg-white container mx-auto px-5">
  <div className="flex flex-col items-center py-8">
    <div className="flex flex-col w-full mb-12 text-left">
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl ">{currentPost?.title}</h1>
        <Image
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1722224079/blog_vane/sanson.jpg"
          width={343}
          height={316}
          alt="Picture of the author"     
        />

        {currentPost?.text.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mx-auto text-base font-medium leading-relaxed text-gray-800 mt-4">
                {paragraph}
              </p>
            ))}
      </div>

      <div className="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
        <div className="flex py-2 mb-4 w-full">
          <img src="https://res.cloudinary.com/dmzibpgwk/image/upload/c_crop,g_auto,h_800,w_800/blog_vane/rbzscxd4ahqzab8kc1m1.jpg" className="object-cover w-12 h-12 mr-2 rounded-full" />
          <div>
            <p className="text-sm font-semibold tracking-tight text-black">Vane</p>
            <p className="text-sm font-normal tracking-tight text-gray-600">Content Creator</p>
          </div>
        </div>
        <a href="/" className="w-full inline-block px-4 py-2 mt-4 text-white transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700"> Seguir en Facebook</a>
      </div>
    </div>
  </div>
</section>



  )
}



