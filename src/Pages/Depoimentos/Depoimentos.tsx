import React from 'react'
import style from"./Depoimentos.module.css"
import iconBack from "../../assets/icon-background.svg"


const Depoimentos = () => {
  return (
    <div className={style.principal}>
        <div className={style.container1}>
        <img src={iconBack} alt=""  />
        <div className={style.titulo}>
        
        <h2>Real Stories from Real Customers</h2>
        <p>Get inspired by these stories.</p>
        </div>
            
        </div>
        <div>

        </div>
    </div>
  )
}

export default Depoimentos