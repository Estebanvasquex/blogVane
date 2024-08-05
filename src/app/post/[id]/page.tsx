import dataCards from '@/data';
import Image from 'next/image';
import React, { use, useEffect } from 'react'
import "./styles.css";

interface Props{
  params: {id: string}
}


export default function page({params}: Props) {

  const currentPost = dataCards.find((post) => post.id === params.id)

  const date = currentPost ? new Date(currentPost.date) : new Date();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = monthNames[date.getMonth()];

  const day = date.getDate();

  const formattedDate = `${month} ${day}`;


  return (

    <div className="max-w-screen-xl mx-auto">



    <main className="mt-10">
    <a href="/"
            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Home</a>

      <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: "24em"}}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"}}></div>
        <img src={currentPost?.imagePost} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {currentPost?.title}
          </h2>
          <div className="flex mt-3">
            <img src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1721970501/blog_vane/rbzscxd4ahqzab8kc1m1.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover" />
            <div>
              <p className="font-semibold text-gray-200 text-sm"> Vanessa Henao </p>
              <p className="font-semibold text-gray-400 text-xs"> {formattedDate} </p>
            </div>
          </div>
        </div>
      </div>



      <div className="px-4 lg:px-0 mt-12 text-gray-00 max-w-screen-md mx-auto text-lg leading-relaxed">{currentPost?.text.split('\n\n').map((paragraph, index) => (
              <p key={index}  className="pb-6">
                {paragraph}
              </p>
            ))}
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-00 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h3 className="text-xl font-semibold mb-2">Reflexión</h3>
        <p className="pb-6">{currentPost?.reflection}</p>
      </div>


    </main>

  </div>


  )
}

/*
<body>
    <div className="container">
        <div className="titulo">
            <h1>{currentPost?.title}</h1>
        </div>
        <div className="foto">
        <Image
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1722224079/blog_vane/sanson.jpg"
          width={343}
          height={316}
          alt="Picture of the author"     
        />
        </div>
        <div className="texto">
            <div>{currentPost?.text.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mx-auto text-base font-medium leading-relaxed text-gray-800 mt-4">
                {paragraph}
              </p>
            ))}</div>
        </div>
        <div className="reflexion">
            <p>Reflexión del autor...</p>
        </div>
        <div className="avatar">
        <Image
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1722224079/blog_vane/sanson.jpg"
          width={343}
          height={316}
          alt="Picture of the author"     
        />
        </div>
    </div>
</body>

*/