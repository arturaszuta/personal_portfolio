import React, { useState } from "react"
import "./projectcard.scss"


export default function ProjectCard(props) {

    

 







    return(
        <div className="projectCard">
            <img src={props.img} />
            <h1>{props.title}</h1>
            <p>{props.tech}</p>
            <p onClick={() => {props.modalFunc('modal modal-active', 'modal__content modal__content-active')}}>LEARN MORE</p>    
        </div>
    )
}