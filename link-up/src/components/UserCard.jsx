import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUnlockAlt,
  faUser,
  faUtensils,
  faGraduationCap,
  faBriefcase,
  faCat,
  faDog,
  faTransgender,
  faSmoking,
  faLanguage,
  faCalendar,
  faWineBottle,
  faChild,
  faPrayingHands,
} from "@fortawesome/free-solid-svg-icons";
const UserCard = () => {
  return (
   <>
   <div className='user-inner-card d-flex flex-column'>
   <img className="user-profile-img" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_35/1476412/peter-bachelorette-today-main-190828.jpg"/>
   <div className='user-about'>
    <span className= 'mx-3 fs-5 '>About</span>
    <div className='d-flex justify-content-between user-info-display'>
   <span> <FontAwesomeIcon icon={faWineBottle}/>drinks</span>
   <span><FontAwesomeIcon icon={faLanguage}/>language</span>
   <span>   <FontAwesomeIcon icon={faGraduationCap}/>education</span>
   <span> <FontAwesomeIcon icon={faBriefcase}/>job</span>
   <span>cats/dogs</span>
   <span><FontAwesomeIcon icon={faSmoking}/>smoker</span>
   </div>
   <TextareaAutosize  className="outline-none text-box rounded-4 border border-light" style={{ width: "100%",resize:"none" }} minRows={8} maxRows={8}/>
   </div>
   </div>
   <div className="user-info d-flex">
    <span className="user-name fw-bold">PETER WEBER</span>
     <span className="user-age"> 35</span>
     <span>language</span>
    </div>
    </>
    
  )
}

export default UserCard
