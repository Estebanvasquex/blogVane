import dataCards from '@/data';


import CardBlog from '@/components/commons/card-blog/CardBlog';

import { link } from 'fs';

export default function Home() {



  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="mb-12 space-y-2 text-center">
        <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
        <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">HISTORIAS PARAKLÉTICAS</h2>
        <p className="lg:w-6/12 lg:mx-auto">Palabras de vida para sanar y alimentar el alma</p>
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




