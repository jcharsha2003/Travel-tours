import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";



const FoodCard = ({ food }) => {
  const { title, desc,link,price, photo} = food;
  

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="tour-img" />
         
        </div>
        <CardBody>
         
          <h5 className="tour_title">
            <Link to={link}>{title}</Link>
          </h5>
          <p className="lead">
            {desc}
          </p>
          <div className="card_bottom d-flex align-itmes-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>
            <button className="btn booking_btn">
              <Link to={link}>Know More</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodCard;
