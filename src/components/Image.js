import React, { useEffect } from 'react';
import DragAndDrop from './DragAndDrop';

function Image(props) {
  const dropRef = React.createRef()
  const imageRef = React.createRef()

  function handleDragEnd() {
    props.replace();
  }

  function handleStartDrag() {
    props.isDragging(props.index);
  }

  function handleDragIn() {
    props.to(props.index);
  }

  function handleDragOut() {
    props.to(-1);
  }

  return (
    <DragAndDrop
      className="image"
      handleDragIn={handleDragIn}
      handleDragOut={handleDragOut}
      handleStartDrag={handleStartDrag}
      handleDragEnd={handleDragEnd}
      dropRef={dropRef}>
      <img ref={imageRef} src={props.obj} alt="img" className="imageToDrag" />
    </DragAndDrop>
  );
}

export default Image;