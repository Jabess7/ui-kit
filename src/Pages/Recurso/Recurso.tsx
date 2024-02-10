import React from 'react'
import Cards from '../../Componente/Cards'
import card1 from"../../assets/card1.svg"
import card2 from"../../assets/card2.svg"
import card3 from"../../assets/card3.svg"
import card4 from"../../assets/card4.svg"
import card5 from"../../assets/card5.svg"
import card6 from"../../assets/card6.svg"
import style from"./Recurso.module.css"

interface cardsDinamic{
    id:number,
    cards: string,
    titulo: string,
    paragrafo: string

}


const cards: cardsDinamic[] = [
    {id:7, cards:card1, titulo:"Robust workflow", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." },
    {id:8, cards:card2, titulo:"Flexibility", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." },
    {id:9, cards:card3, titulo:"User friendly", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." },
    {id:10, cards:card4, titulo:"Multiple layouts", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." },
    {id:11, cards:card5, titulo:"Better components", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." },
    {id:12, cards:card6, titulo:"Well organised", paragrafo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum." }
]

const Recurso = () => {
  return (
    <section className={style.secaoCards}>
            <div className={style.cardsTitulo}>
              <h2>Tailor-made features</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet facere dolores quos commodi rem nam officia, deleniti ad excepturi quae delectus sed tenetur sunt cupiditate eaque rerum ipsa dolore optio.</p>
            </div>
            <div className={style.cardsRed}>
              {cards.map((card) => <Cards  key={card.id} cards={card.cards} titulo={card.titulo}  paragrafo={card.paragrafo} /> )}
            </div>
    </section>
  )
}

export default Recurso