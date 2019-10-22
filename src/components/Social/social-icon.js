import React from "react"

export default function SocialIcon(props) {





    return (
        <a href={props.address} className="pulsate-fwd" target="_blank" rel="noopener noreferrer"><img src={props.icon} alt="social icon" /></a>
    )
}