import React from "react"
import "./projectcard.scss"
import { tsPropertySignature } from "@babel/types"

export default function ProjectCard(props) {








    return(
        <div className="projectCard">
            <img src={props.img} />
            <h1>{props.title}</h1>
            <p>{props.tech}</p>
            <p>LEARN MORE</p>    
        </div>
    )
}