import React from 'react'

const UserCard = () => {
  return (
   <>
   <div className='user-inner-card d-flex flex-column'>
   <img className="user-profile-img" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_35/1476412/peter-bachelorette-today-main-190828.jpg"/>
   <div><span>About</span></div>
 
   <span>drinks</span>
   <span>education</span>
   <span>job</span>
   <span>cats/dogs</span>
   <span>smoker</span>


   </div>
   {/* <div className="user-info d-flex">
    <span className="user-name fw-bold">PETER WEBER</span>
     <span className="user-age"> 35</span>
     <span>language</span>
    </div> */}
    </>
    
  )
}

export default UserCard
