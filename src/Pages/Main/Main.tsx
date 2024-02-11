import React from 'react'
import style from"./Main.module.css"
import smarth from"../../assets/telefone.svg"
import iconPlay from"../../assets/icon-play.svg"

const Main = () => {
  return (
    <div>
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
        </main>
    </div>
  )
}

export default Main