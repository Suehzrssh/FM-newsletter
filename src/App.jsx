import Container from './pages/Container';
import './App.css';
import { useState } from 'react';
import {Filecontext} from './context/Filecontext.jsx';

function App() {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);


  const handleConfirm = (e) => {
    e.preventDefault();
    if(val) {
      setShow(true)
    }else {
      setErr(true);
    }
  }

  const handleHide = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <div className="App">
      <Filecontext.Provider value={{
        show, setShow,
        val, setVal,
        err, setErr,
        handleConfirm, handleHide
      }}>
        <Container />
      </Filecontext.Provider>
    </div>
  )
}

export default App;
