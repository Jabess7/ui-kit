import React from "react";
import Header from "../../Componente/Header/Header";
import smarth from"../../assets/telefone.svg"
import iconPlay from"../../assets/icon-play.svg"
import style from"./Home.module.css"
import Patrocinador from "../../Componente/Patrocinador"
import Recurso from "../Recurso";



const Home = () => {

    return(
       <>
        <Header />
        <main>
            <section className={style.section}>
                <div className={style.container1}>
                    <div className={style.titulo}>
                        <h1>The easiest way to<br></br>manage projects</h1>
                        <p>From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.</p>
                        <div className={style.links}>
                            <a href="#" className={style.a1}>Get Started</a>
                            <a href="#" className={style.a2}> <img src={iconPlay} alt="play" /><span>Watch Video</span></a>
                        </div>
                    </div>
                    <div className={style.container2}>
                        <img src={smarth} alt="" />
                    </div>
                </div>
            </section>
            <section >
                <Patrocinador/>
            </section>
            <section>
                <Recurso/>
            </section>
        </main>

       </>
    )
}
export default Home;