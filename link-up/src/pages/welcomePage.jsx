
import React , {useContext} from 'react';
import welcome from '../styles/welcomePage.css'
import LogoBig from '../LinkUp-LOGO.png';
import { useState , useEffect} from 'react';
import linkUpContext from '../context/context';
import ModalLoginSign from './ModalLoginSign';


const WelcomePage = () => {
  const {toggleModal} = useContext(linkUpContext);
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
        <ModalLoginSign/>
        
      </div>
    </div>
  );
};
export default WelcomePage;