import React from "react"
import "./card.scss"

export default function Card(props) {








    return (
        <div className="card">
        <div className="face face1">
            <div className="content">
                <img src={props.imgSrc} />
                <h3>{props.title}</h3>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <p>{props.content}</p>    
            </div>
        </div>
    </div>
    )
}