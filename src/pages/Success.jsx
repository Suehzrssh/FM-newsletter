import React, { useContext } from 'react';
import { Filecontext } from '../context/Filecontext';
import "../styles/Success.scss";

const Success = () => {
    const {handleHide, val} = useContext(Filecontext);
  return (
    <div className='success'>
        <img src="/images/icon-success.svg" alt="" />
        <h2>Thanks for subscribing!</h2>
        <p>A confirmation email has been send to             <b>{val || 'example@example.com'}</b>. Please open it 
            and click the button inside to confirm 
            your confirmation 
        </p>
        <button onClick={handleHide}>Dismiss message</button>
    </div>
  )
}

export default Success