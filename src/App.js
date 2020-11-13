import './styles/App.css';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(<div></div>);

  function getImages() {
    let divs = document.querySelectorAll('.content > .imageToDrag')
    for (let div of divs) {
      div.removeEventListener('click', onClick)
      div.addEventListener('click', onClick)
    }
  }

  function onClick(e) {
    setModal(<Modal
      obj={e.target}
      close={() => setModal(<div></div>)}
    />)
  }

  return (
    <div className="App">
      <Sidebar/>
      <div className="content" contentEditable={true} onInput={getImages}></div>
      {modal}
    </div>
  );
}

export default App;
