


import CardBlog from '@/components/commons/card-blog/CardBlog';

import { link } from 'fs';

export default function Home() {

  const dataCards = [
    {
      title: 'EL HOMBRE QUE ARRUINÓ SU DESTINO POR SU EGO',
      description: 'Le pondré a nuestro personaje un nombre ficticio: se llamará Guillermo. Resulta que la madre de Guillermo no podía tener hijos, entonces clamó con todo su corazón al Dios en quien ella creía, pidiéndole que le permitiera ser madre. Su Dios, bueno y compasivo, le otorgó su deseo. No solo le permitió ser mamá, sino que también le dio un propósito a Guillermo desde antes de nacer. "Guillermo será quien libre a toda tu nación de sus enemigos", le dijo su Dios.

El pequeño Guillermo crecía y crecía, y junto con él se desarrollaba una fuerza sin igual. Sus padres siempre le recordaban el porqué de sus talentos y habilidades.

Guillermo, al fin llegó a su juventud y en un abrir y cerrar de ojos, su corazón empezó a hacer estragos. Según él, se enamoró a primera vista, pero resulta que la susodicha pertenecía nada más y nada menos que a la nación enemiga. Guillermo se olvidó por un momento de su propósito, y pese a que sus padres se opusieron a su relación, Guillermo se dejó llevar por sus deseos y terminó casándose con ella.

Lo triste de la historia es que lo que empieza mal casi siempre termina mal. Finalmente, la mujer de la que estaba enamorado termina quedándose con su mejor amigo y, por venganza, Guillermo mata a un montón de hombres, recordando que estaba en territorio enemigo.

Con su corazón dolido y muy lastimado, Guillermo sigue cediendo a sus más lascivos deseos y, en un arranque de pasión descontrolada, decide buscar a una amiga de las que tienen sexo por dinero y termina acostándose con ella.

Ahora ya era mucho más vulnerable, pero tener una fuerza tan extraordinaria lograba todavía darle un poco de calma. Sin embargo, pese a que satisfacía sus arranques sexuales por un momento, seguía sin hallarse, y buscaba y buscaba cómo calmar su apetito insaciable.

Finalmente, conoce a la chica de sus sueños. "Esta vez sí va a funcionar", se dijo a sí mismo. "No sé cómo lo voy a lograr, pero estoy seguro de que mi fuerza y mi amor lograrán que por fin sea feliz", se repetía una y otra vez. Sus enemigos se enteraron de su situación sentimental y decidieron proponerle un muy buen negocio a la chica: "Si logras descubrir cuál es el secreto de su fuerza, entonces te daremos mucho dinero". Ella, sin pensarlo dos veces, cerró el trato y, día y noche, trataba de que Guillermo le contara su más íntimo secreto, porque, aunque no se los había mencionado antes, resulta que el secreto de su gran fuerza solo lo conocían él y sus papás.

La cosa es que esta mujer lo perturbó tanto, todos los días, que en un momento Guillermo no aguantó más y cayó en una severa depresión. Porque que nos quede muy claro a todos, las palabras que escuchamos todos los días y en todo momento son las que van a determinar en lo que vamos a creer y, por lo tanto, lo que vamos a hacer. Esta mujer se hacía la víctima con el pobre Guillermo, le manipulaba diciéndole que él no la amaba, que su corazón no le pertenecía a ella, y poniéndolo siempre entre la espada y la pared, terminó arruinando toda su autoestima. En uno de esos momentos, donde la cabeza ya no puede más, Guillermo le desnudó todo su corazón, contándole incluso su más preciado secreto: la fuente de su fuerza.

Inmediatamente, esta vil mujer corre a contarle a sus socios el acaecimiento de la historia, y ellos, sin titubear ni por un segundo, llegan donde está Guillermo, debilitado ya en su consciencia y derrumbado. Efectivamente, cortaron la fuente de su fuerza, pero no contentos con ello, decidieron sacarle los ojos y llevarlo como esclavo a su nación, donde lo sometieron a duros trabajos.

Guillermo por fin reacciona, pero para desdicha de él, ya era muy tarde. Había cambiado su propósito por un placer momentáneo que no lo llevaría a nada más que a su ruina segura. En un último suspiro, Guillermo clama al Dios de sus padres que le dé una última oportunidad para por lo menos morir con dignidad. Entonces, su deseo le es concedido. Así que, con su fuerza sobrehumana, derriba el lugar donde está y mata a todos los que allí se encontraban, y, por supuesto, él también perece junto a ellos.

Así de triste termina la historia de Guillermo, pero quiero invitarte a leer esta última reflexión, si es que no te has cansado y lograste llegar hasta este punto de la historia.

A veces, como Guillermo, tenemos un destino brillante y un propósito espectacular que cumplir, pero lamentablemente cambiamos instantes de placer por destinos maravillosos y nos dejamos llevar por el momento, olvidando que fuimos dotados para huir de lo que nos hace daño. Y es que lo delicado del asunto es que, una vez empezamos a ceder, es difícil parar y lentamente nos vamos adentrando más en el hoyo que nos lleva a nuestra propia ruina.

Así que hoy te invito a que hagas un alto en tu camino, recuerdes tu propósito en esta tierra y te enfoques de nuevo. Este hombre lo tenía todo: fue un milagro, conocía desde siempre su propósito y además fue bendecido con una fuerza sin igual, pero teniéndolo todo, cambió su espléndido destino por un deseo momentáneo que lo llevó a su propia tumba.

Si estás leyendo esto y no sabes cómo hacerlo, escríbenos. Tal vez no podamos solucionar toda tu vida, pero ten por seguro que sí tendrás a alguien que te escuche y te dé un buen consejo.

Gracias por llegar hasta aquí y leer hasta el final.',
      date: '2024-07-24',
      image: 'https://drive.google.com/file/d/1TKuI2Zr4Q1Zxn9odH-BGszE6QbdspO2E/view?usp=sharing',
      link: '',
    }

  ]


  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
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




