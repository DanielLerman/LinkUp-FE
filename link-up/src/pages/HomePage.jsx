import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import UserCard from "../components/UserCard";


const HomePage = () => {
  return (
    <>
    <Carousel indicators={false} className="home-page">
     <Carousel.Item className="user-card d-flex flex-column align-items-center">
    <UserCard />
 </Carousel.Item>


  </Carousel >
  </>
  )
}

export default HomePage
