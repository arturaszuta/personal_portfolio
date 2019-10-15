import React from "react"

export default function SocialIcon(props) {





    return (
        <a href={props.address} className="pulsate-fwd" target="_blank" ><img src={props.icon} /></a>
    )
}