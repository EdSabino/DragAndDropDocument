import './../styles/Modal.css';
import React from 'react';

function Modal(props) {

  function getObj () {
    return props.obj ?? {}
  }

  return (
    <div className="modal">
      <div className="close" onClick={props.close}>X</div>
      <div>
        Name: { getObj().alt }
      </div>
      <div>
        X: { getObj().x }
      </div>
      <div>
        Y: { getObj().y }
      </div>
      <div>
        Size: { getObj().width } x { getObj().height }
      </div>
    </div>
  );
}

export default Modal;