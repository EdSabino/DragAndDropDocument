import './../styles/AddImage.css';
import React from 'react';
import DragAndDrop from './DragAndDrop';

function AddImage(props) {
  const dropRef = React.createRef()

  function handleDrop (e) { 
    const fr = new FileReader();
    fr.onload = 
      function(e) {
        let imgs = JSON.parse(localStorage.getItem('images'));
        console.log(imgs)
        if (!imgs) {
          imgs = [];
        }
        imgs.push(e.target.result);
        console.log(imgs)
        localStorage.setItem('images', JSON.stringify(imgs));
        props.newImage();
      }
    fr.readAsDataURL(e.dataTransfer.files[0]);
  }

  return (
    <DragAndDrop
      handleDrop={handleDrop}
      dropRef={dropRef}
      className="add-image">
      <span>
          Drag a image here
      </span>
    </DragAndDrop>
  );
}

export default AddImage;
