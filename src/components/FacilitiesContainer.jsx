import React from "react";
import "../styles/components/FacilitiesContainer.css";

const FacilitiesContainer = ({ image, title, descriptions }) => {
  return (
    <div className="facilities-container">
      <img src={image} alt={title} className="facilities-image" />
      <h1 className="facilities-image-title">{title}</h1>

      <ul className="facilities-description">
        {descriptions &&
          descriptions.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FacilitiesContainer;
