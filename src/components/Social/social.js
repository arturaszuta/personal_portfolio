import React from "react"
import "./social.scss"
import github from "../../media/github.png"
import linkedin from "../../media/linkedin.png"
import SocialIcon from "./social-icon";

export default function Social() {






    return (
        <section class="social">
           <SocialIcon address={"https://github.com/arturaszuta"} icon={github} />
           <SocialIcon address={"https://www.linkedin.com/in/arturaszuta/"} icon={linkedin} />
           
        </section>
    )
}