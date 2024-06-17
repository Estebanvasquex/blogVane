


import CardBlog from '@/components/commons/card-blog/CardBlog';

import { link } from 'fs';

export default function Home() {

  const dataCards = [
    {
      title: 'Hasta el minimo detalle',
      description: 'Dios conoce tu necesidad y está pendiente de cada detalle de tu vida.',
      date: '2021-09-01',
      image: 'https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '',
    },
    {
      title: 'La estrategia del león',
      description: 'Aunque no es el felino ni más velos ni más fuerte, si es el mas intelingente y el mas cooperativo, por eso se le conoce como el rey de la selva.',
      date: '2021-09-01',
      image: 'https://images.unsplash.com/photo-1512614521719-2806f69d406b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://images.unsplash.com/photo-1630676938982-0f2b8d6b2b6b',
    },
    {
      title: '¿De que estas lleno?',
      description: 'Cuando el globo está solo con aire no soporta el calor del fuego pero cuando está lleno de agua esta absorbe el calor y no le permite explotar.',
      date: '2021-09-01',
      image: 'https://images.unsplash.com/photo-1602153883150-a442f874f839?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://images.unsplash.com/photo-1630676938982-0f2b8d6b2b6b',
    },
    {
      title: 'Cual es tu filtro',
      description: 'La pupila o niña de los ojos es la que determina la cantidad de luz que entra al ojo es por ello que al estar espuesta a más cantidad de luz esta se pone pequeña y cuado hay escasez de luz esta se pone grande.',
      date: '2021-09-01',
      image: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://images.unsplash.com/photo-1630676938982-0f2b8d6b2b6b',
    },
    {
      title: 'Cuando el deber te llama, atiendele',
      description: 'Saber que debemos hacer algo y no hacerlo puede cambiar nuestro destino, por eso no postergues tu deber.',
      date: '2021-09-01',
      image: 'https://images.unsplash.com/photo-1620058623533-1f9a64e9baad?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://images.unsplash.com/photo-1630676938982-0f2b8d6b2b6b',
    },
  ]


  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
    <h1 className="text-lg font-medium">esto es una prueba</h1>
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="mb-12 space-y-2 text-center">
        <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
        <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Sin mi nada podreís</h2>
        <p className="lg:w-6/12 lg:mx-auto">Palabras de vida para sanar y alimentar el alma</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
      {
          dataCards.map((card, index) => (
            <CardBlog key={index} title={card.title} description={card.description} date={card.date} image={card.image} link={card.link}/>
          ))
        }



      </div>
    </div>
  </div>


  );
}




