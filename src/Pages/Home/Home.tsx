import React from "react";
import Header from "../../Componente/Header/Header";
import style from"./Home.module.css"
import Patrocinador from "../../Componente/Patrocinador"
import Recurso from "../Recurso";
import Main from "../Main";
import Depoimentos from "../Depoimentos";



const Home = () => {

    return(
       <>
        <div className={style.background}>
        <Header />
        <Main/>
        </div>
        <Patrocinador/>  
        <Recurso/>
        <Depoimentos/>
           
        

       </>
    )
}
export default Home;