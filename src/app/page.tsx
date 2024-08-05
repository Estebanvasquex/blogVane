import dataCards from '@/data';


import CardBlog from '@/components/commons/card-blog/CardBlog';

import { link } from 'fs';
import Image from 'next/image';

export default function Home() {



  return (
    <div className="py-16 bg-[#ffffff] ">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="mb-12 space-y-2 text-center">
        <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
        
        <Image src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1722878158/blog_vane/logoHistoriasParaKleticas_td1vvp.png" alt="logo" width={500} height={100} className="mx-auto" />
        <h2 className="text-2xl text-[#6E7D75]-900 md:text-2xl">Historias con propósito para aliviar el alma</h2>
      
      </div>

      <div className="grid gap-12 lg:grid-cols-2">

      {
          dataCards.map((card) => (
            <CardBlog key={card.id} title={card.title} description={card.description} date={card.date} image={card.image} id={card.id}/>
          ))
        }



      </div>
    </div>
  </div>


  );
}




