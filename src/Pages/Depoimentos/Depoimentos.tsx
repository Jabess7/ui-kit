import React from 'react'
import style from"./Depoimentos.module.css"
import iconBack from "../../assets/icon-background.svg"
import iconAirbn from "../../assets/icon-airbn.svg"
import iconHubSport from "../../assets/icon-hubsport.svg"
import iconStripi from "../../assets/icon-strapi.svg"
import iconDepo from "./icon-depo.svg"



const Depoimentos = () => {
  return (
    <div className={style.principal}>
        <div className={style.container1}>
            <img src={iconBack} alt=""  />
            
            <div className={style.titulo}>        
                <h2>Real Stories from Real Customers</h2>
                <p>Get inspired by these stories.</p>
                
        <div className={style.depo1}>            
            <img src={iconHubSport} alt="" className={style.lg1} /><br />
            <img src={iconDepo} alt="" className={style.icoDepo} />
            <p>To quickly start my startup <br />
                landing page design, I was <br />
                looking for a landing page UI Kit. <br />
                Landify is one of the best landing <br />
                page UI kit I have come across. <br />
                It's so flexible, well organised and <br />
                easily editable.</p>
            <div className={style.descri}>
                <h4>Floyd Miles</h4>
                <p >Vice President, GoPro</p>
            </div>
           
        </div>
        </div>
         </div>
        <div className={style.container2}>
        

            <div className={style.depo2}>            
                <img src={iconAirbn} alt="" className={style.lg1} /><br />
                <img src={iconDepo} alt="" className={style.icoDepo} />
                <p>I used landify and created a landing page for <br />
                    my startup within a week. The Landify UI Kit <br />
                    is simple and highly intuitive, so anyone can <br />
                    use it.</p>
                <div className={style.descri}>
                    <h4>Jane Cooper</h4>
                    <p >CEO, Airbnb</p>
                </div>
               </div> 
                <div className={style.depo3}>            
                <img src={iconStripi} alt="" className={style.lg1} /><br />
                <img src={iconDepo} alt="" className={style.icoDepo} />
                <p>Landify saved our time in <br />
                    designing my company page.</p>
                <div className={style.descri}>
                    <h4>Kristin Watson</h4>
                    <p >Co-Founder, Strapi</p>
                </div>
                </div>
           
        </div>
        

        
    </div>
  )
}

export default Depoimentos