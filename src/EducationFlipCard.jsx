import React from "react";
import "./EducationFlipCard.css";

const EducationFlipCard = () => {
  return (

    <>
    <h2>EDUCATION</h2>
    <br/><br/>
    <div className="flip-card">
      <div className="flip-card-inner">
        {/*  Front Side */ }
        <div className="flip-card-front">
          <h3>B.Tech in Mechanical Engineering</h3>
          <p>National Institute of Technology, Andhra Pradesh</p>
          <p>📍 Tadepalligudem, Andhra Pradesh</p>
          <p>2022 – 2026</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <p><strong>CGPA:</strong> 7.37 / 10</p>
          <p><strong>Schooling:</strong> DAV Public School Bariatu</p>
          <p>📍 Ranchi, Jharkhand</p>
          <ul>
            <li><strong>10<sup>th</sup></strong> : 91.6&#x00025;</li>
            <li><strong>12<sup>th</sup></strong> : 92.6&#x00025;</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default EducationFlipCard;
