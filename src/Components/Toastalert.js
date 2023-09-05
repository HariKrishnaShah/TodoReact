import React, { useContext } from 'react'
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import taskcontext from '../Context/TaskContext';

function Toastalert() {
  // eslint-disable-next-line
    const [position, setPosition] = useState('bottom-end');
    const Taskstates = useContext(taskcontext);
    const {toast, closeToast} = Taskstates;
    return (
      <>
      {toast && <ToastContainer
          className="p-3"
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Todo</strong>
              <div><button onClick = {closeToast} style = {{background:"none", border:"none"}}><strong>X</strong></button></div>
            </Toast.Header>
            <Toast.Body>{toast.msg}</Toast.Body>
          </Toast>
        </ToastContainer>}
        
      </>
    );
}

export default Toastalert