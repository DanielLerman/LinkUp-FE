import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import UserCard from "../components/UserCard";


const HomePage = () => {
  return (
    <Carousel className="home-page d-flex flex-column">
    <Carousel.Item className="user-card d-flex flex-column ">
    <UserCard />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>


  </Carousel>
  )
}

export default HomePage
