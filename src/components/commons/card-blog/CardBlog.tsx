import Image from 'next/image'
import React from 'react'

interface CardBlogProps {
  title: string
  description: string
  image: string
  date: string
  id: string
}

const CardBlog = (props: CardBlogProps ) => {
  const { title, description, image, date, id } = props
/*
  src="/profile.png"
  width={243}
  height={216}
  alt="Picture of the author"
  */



  return (
<div className="p-1 rounded-xl group sm:flex space-x-6 shadow-xl hover:rounded-2xl  bg-[#6E7D75]">
          <img src={image} alt="art cover" loading="lazy" className="h-56 lg:h-full w-full lg:w-5/12  rounded-lg transition duration-500 group-hover:rounded-xl" />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-[#EBA966]">{title}</h4>
                <p className="text-[white]">{description}</p>
              </div>
              <div className='border-1 rounded-sm'>
                <a href={`/post/${id}`} className="block w-max text-[#CD796F] p-1  bg-white rounded-md ">Leer más</a>       
              </div>
              
            </div>
          </div>
        </div>
  )
}

export default CardBlog

