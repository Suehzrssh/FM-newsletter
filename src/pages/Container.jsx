import React, { useContext } from 'react';
import { Filecontext } from '../context/Filecontext';
import Success from './Success.jsx';
import "../styles/Container.scss";

const Container = () => {
  const {err, val, setVal, handleConfirm, show} = useContext(Filecontext);
  return (
    <>
    {show ? <Success /> : (
      <div className="container">
      <div className="left">
        <h3>Stay updated!</h3>
        <p>Join 60.000+ product managers receiving monthly updates on.</p>
        <div className="list">
          <img src="/images/icon-list.svg" alt="" />
          <h4>Product discovery and building what matters</h4>
        </div>
        <div className="list">
          <img src="/images/icon-list.svg" alt="" />
          <h4>Measuring to ensure updates are a success</h4>
        </div>
        <div className="list">
          <img src="/images/icon-list.svg" alt="" />
          <h4>And much more!</h4>
        </div>

        <div className="email">
          <label htmlFor="email">Email address</label>
          <input placeholder='example@example.com' required type="email" name={val} id='email' onChange={e=> setVal(e.target.value)}/>
          {err && <div className='error'>This field is required!</div>}
        </div>
        <button onClick={handleConfirm}>Subscribe to monthly newsletter</button>
      </div>
      <div className="right">
        <img className='rImg' src="/images/illustration-sign-up-desktop.svg" alt="" />
      </div>
    </div>
    )}
    </>
  )
}

export default Container