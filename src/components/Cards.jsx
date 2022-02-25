import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "./Images/img-9.jpeg";
import img2 from "./Images/img-2.jpeg";
import img3 from "./Images/img-3.jpeg";
import img4 from "./Images/img-4.jpeg";
import img8 from "./Images/img-8.jpeg";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hideen waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of BAli in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Experience Footabll on Top of Mountains"
              label="Entertainment"
              path="/services"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert camel tour"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
