import React, { useState } from "react";

const [modalState, setModalState] = useState('modal');

export function ApplicationData() {
  setModalState('modal modal-active')
}

export { modalState };

