import React from "react";
import "../styles/components/FacilitiesContainer.css";

const FacilitiesContainer = ({ facilities }) => {
  return (
    <section>
      <div className="facilities-container">
        {facilities &&
          facilities.map((facility, index) => (
            <div className="facility-box" key={`facility-${index}`}>
              <img src={facility.image} alt={`기타장비 ${index + 1}`} />
              <h3 className="facilities-detail-title">
                {facility.detail_title}
              </h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FacilitiesContainer;
