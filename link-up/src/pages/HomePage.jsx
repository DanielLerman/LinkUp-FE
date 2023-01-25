import React from "react";



const HomePage = () => {
  return (
    <div className="home-page d-flex flex-column align-items-center">
     <div className="user-card d-flex flex-column">
      <img className="user-profile-img" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_35/1476412/peter-bachelorette-today-main-190828.jpg"/>
      <div className="user-info">
      <span className="user-name fw-bold">PETER WEBER</span>
      <span className="user-age"> 35</span>
      </div>
     
     </div>
    </div>
  )
}

export default HomePage
