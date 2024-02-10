import React from "react";
import style from "./Patrocinador.module.css"
import airbn from"../../assets/icon-airbn.svg"
import hubsport from"../../assets/icon-hubsport.svg"
import google from"../../assets/icon-google2.svg"
import microsolt from"../../assets/icon-microsolt.svg"
import walmart from"../../assets/icon-walmart.svg"
import fedex from"../../assets/icon-fedex.svg"

interface iconsprotys{
    id:number,
    icon: string
}


const icons: iconsprotys[] = [
    {id:1, icon:airbn },
    {id:2, icon:hubsport},
    {id:3, icon:google},
    {id:4, icon:microsolt},
    {id:5, icon:walmart},
    {id:6, icon:fedex}
]

const Patrocinador = () =>{
    return( <div className={style.container}>
            <ul>
               {
                icons.map((icon) => <li key={icon.id}><img src={icon.icon} alt="icon" /></li>)
               }
            </ul>
    </div>
    
)}

export default Patrocinador