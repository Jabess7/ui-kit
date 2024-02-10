import React from 'react'
import style from"./Cards.module.css"

interface cardsDinamic{
  cards: string,
  titulo: string,
  paragrafo: string

}

const Cards = ({cards,titulo,paragrafo}: cardsDinamic) => {
  return (
    <div className={style.container}>
      <img src={cards} alt="logo" />
      <h3>{titulo}</h3>
      <p>{paragrafo}</p>        
    </div>
  )
}

export default Cards