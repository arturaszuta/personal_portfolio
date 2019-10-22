import React, { useState, useEffect } from "react";
import "./modal.scss"
import arrow from "../../media/right-arrow.png"


export default function Modal(props) {

  let stack = [];
  let bgIMGs = [];
  
  
  if(props.data && Object.keys(props.data).length > 0) {
    stack = props.data.stack.map((e) => <li>{e}</li>);
    bgIMGs = props.data.screenshots;
  }
  
  const [currentIMG, setCurrentIMG] = useState('');
  
  useEffect(() => {
    setCurrentIMG(bgIMGs[0])
  }, [bgIMGs])



  function changeImg() {

    if(currentIMG == bgIMGs[0]) {
      setCurrentIMG(bgIMGs[1]);
    }

    if(currentIMG == bgIMGs[1]) {
      setCurrentIMG(bgIMGs[2]);
    }

    if(currentIMG == bgIMGs[2]) {
      setCurrentIMG(bgIMGs[0]);
    }
    
  }


  

  






  return (
    <div className={props.class} onClick={() => {props.modalFunc('modal', 'modal__content', {})}}>
      <div className={props.modalContent}>
        <div className="modal__content-left">
          <h1>
            Project name: {props.data && props.data.title}
          </h1>
          <h2>
            Technologies used:
          </h2>
          <ul>
            {stack}
          </ul>
          <h2>
            Description:
          </h2>
          <p>
            {props.data && props.data.description}
          </p>
          <a href={props.github} target="_blank">VISIT GITHUB</a>
        </div>
        <div className="modal__content-right" style={{backgroundImage: `url(${currentIMG})`}}>
          <div className="modalNavigation">
            <img src={arrow} alt="arrow right" onClick={(event) => {
              event.stopPropagation();
              changeImg()}} />
          </div>
        </div>
      </div>
    </div>
  )
}