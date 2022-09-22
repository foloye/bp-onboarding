// import logo from './logo.svg';
import SLogo from './sundaylogo.png'
import './App.css';
import React from 'react';
// import {useNavigate} from "react-router-dom"

function App() {
  // const navigate = useNavigate()
  // function goLink(){
  //   navigate("https://youtu.be/_kqQDCxRCzM")

  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>This is Folasade's app yassss</h2>
      <img src="https://pyxis.nymag.com/v1/imgs/8ee/9b2/daf79f1b992e86ab665acbbef7f7082c71-13-one-direction-friends.2x.rsocial.w600.jpg" alt="one direction" />
    
      </header> */}
      <img className='logo' src={SLogo} alt="logo for sunday friends"/>
      <div className='page-info'>
        <div>
          <h1 className='welcome'>Welcome Back!</h1>
          <h4 className='prompt'>Sign in to continue</h4>
        </div>
        
        <div className='e-input'>
          <span className='inputs'>EMAIL</span> 
          <span className='test'>thisisanemail@email.com</span>
        </div>
        
        <div  className='e-input'>
          <span className='inputs'>PASSWORD</span>
          <span className='test-p'>Create Password</span>
        </div>
        <div  className='activate'>
          <span>Haven't activated your account yet?</span><span className='link-a'> <a className='anchor' href='https://www.buzzfeed.com/itsmemeg/which-one-direction-boy-is-your-soulmate-1m7bjks3e2' target="_blank">Activate Now</a></span><button className='a-btn'><a className='btn-link' target="_blank" href='https://youtu.be/_kqQDCxRCzM'>Sign In</a></button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
