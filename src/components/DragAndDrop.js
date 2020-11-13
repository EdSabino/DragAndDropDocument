import React, { useEffect } from 'react';

function DragAndDrop(props) {
    const dropRef = props.dropRef

    function handleDrag (e) {
      e.preventDefault()
      e.stopPropagation()
      if (props.handleDrag) {
        props.handleDrag(e)
      }
    }
  
    function handleDragIn (e) { 
      e.preventDefault()
      e.stopPropagation()
      if (props.handleDragIn) {
        props.handleDragIn(e)
      }
    }

    function handleDragOut (e) { 
      e.preventDefault()
      e.stopPropagation()
      if (props.handleDragOut) {
        props.handleDragOut(e)
      }
    }

    function handleStartDrag (e) {
      if (props.handleStartDrag) {
        props.handleStartDrag(e)
      }
    }
  
    function handleDrop (e) { 
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        if (props.handleDrop) {
          props.handleDrop(e)
        }
        e.dataTransfer.clearData();
      }
    }

    function handleDragEnd(e) {
      if (props.handleDragEnd) {
        props.handleDragEnd(e)
      }
    }
  
    useEffect(() => {
      let div = dropRef.current
      div.addEventListener('dragenter', handleDragIn)
      div.addEventListener('ondragstart', handleStartDrag)
      div.addEventListener('dragleave', handleDragOut)
      div.addEventListener('dragover', handleDrag)
      div.addEventListener('drop', handleDrop)
      return () => {
        div.removeEventListener('dragenter', handleDragIn)
        div.removeEventListener('ondragstart', handleStartDrag)
        div.removeEventListener('dragleave', handleDragOut)
        div.removeEventListener('dragover', handleDrag)
        div.removeEventListener('drop', handleDrop)
      };
    });
  
    return (
      <div draggable="true" ref={dropRef} className={props.className} 
        onDragStart={handleStartDrag} 
        onDragEnd={handleDragEnd}>
        {props.children}
      </div>
    );
}
  
export default DragAndDrop;