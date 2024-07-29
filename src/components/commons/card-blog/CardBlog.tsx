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
<div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <Image src={image} alt="art cover" loading="lazy" width={243} height={216} className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
              <a href={`/post/${id}`} className="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
  )
}

export default CardBlog

