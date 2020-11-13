import './../styles/Sidebar.css';
import React, { useState } from 'react';
import AddImage from './AddImage';
import Image from './Image';

function Sidebar() {
  const [objects, setObjects] = useState(getImages());
  let rows = []
  let origin = 0;
  let destiny = 0;

  function isDragging (index) {
    origin = index;
  }

  function to (index) {
    destiny = index;
  }

  function replace () {
    let temp = [];
    if (destiny > -1) {

      for (let i = 0; i < objects.length; i++) {
        if (parseInt(origin) === i) {
          i += 1
        }
        if (parseInt(destiny) === i) {
          temp.push(objects[i]);
          temp.push(objects[origin])
        } else {
          temp.push(objects[i]);
        }
      }
      
      setObjects(temp);
      localStorage.setItem('images', JSON.stringify(temp));
    }
  }

  for(let index in objects){
    rows.push(<Image
      key={index}
      index={index}
      obj={objects[index]}
      isDragging={isDragging}
      to={to}
      replace={replace}
    />)
  }

  function getImages () {
    let val = localStorage.getItem('images') ?? '[]';
    return JSON.parse(val);
  }

  function newImage () {
    setObjects(getImages())
  }
  
  return (
    <div className="sidebar">
      <AddImage
        newImage={newImage}/>
      { rows }
    </div>
  );
}

export default Sidebar;
