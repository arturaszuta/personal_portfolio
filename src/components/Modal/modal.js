import React from "react";
import "./modal.scss"

export default function Modal(props) {

  let stack = [];

  if(props.data && Object.keys(props.data).length > 0) {
    stack = props.data.stack.map((e) => <li>{e}</li>);
  }

  






  return (
    <div className={props.class}>
      <div className={props.modalContent} onClick={() => {props.modalFunc('modal', 'modal__content', {})}} >
        <div className="modal__content-left">
          <h1>
            {props.data && props.data.title}
          </h1>
          <ul>
            {stack}
          </ul>
            {props.data && props.data.description}
        </div>
        <div className="modal__content-right">

        </div>
      </div>
    </div>
  )
}