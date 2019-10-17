import React from "react";
import "./modal.scss"

export default function Modal(props) {







  return (
    <div className={props.class}>
      <div className={props.modalContent} onClick={() => {props.modalFunc('modal', 'modal__content')}} >
        <p>This is a modal!</p>
      </div>
    </div>
  )
}