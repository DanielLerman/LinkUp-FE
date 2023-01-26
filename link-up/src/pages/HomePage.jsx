import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import UserCard from "../components/UserCard";


const HomePage = () => {
  return (
    <>
 
    <Carousel indicators={false} className="home-page d-flex ">
     <Carousel.Item className="user-card d-flex flex-column "> 
     <UserCard />
    </Carousel.Item>
    <Carousel.Item className="user-card d-flex flex-column "> 
     <UserCard />
    </Carousel.Item>
    <Carousel.Item className="user-card d-flex flex-column "> 
     <UserCard />
    </Carousel.Item>
  </Carousel >
  </>
  )
}

export default HomePage
