import React from "react"
import "./navbar.scss"



export default function Navbar(props) {






    return (
        <div className={props.background}>
            <a href="#landing">LANDING</a>
            <a href="#about">ABOUT</a>
            <a href="#techstack">TECH</a>
            <a href="#projects">PROJECTS</a>
            <a href="#connect">CONNECT</a>
        </div>
    )
    
}