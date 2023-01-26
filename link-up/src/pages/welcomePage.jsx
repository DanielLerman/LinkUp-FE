
import React from 'react';
import welcome from '../styles/welcomePage.css'
import LogoBig from '../LinkUp-LOGO.png';
import { useState , useEffect} from 'react';


const WelcomePage = () => {
  return (
    <div className='WelcomePageContainer'>
        <div className='welcomeHeader'  >
         <span><h2>Welcome to LinkUp</h2></span>
         <span><h2> where every connection has a good story to tell</h2></span>
        </div>
      <div className='LogoContainer'>
       <img src={LogoBig} alt='Logo' className='Logo' />
      </div>
      <div>
        <button className='LoginSuButton'>Login/Signup</button>
      </div>
    </div>
  );
};
export default WelcomePage;