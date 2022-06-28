import React from "react";
import star from "../Images/icon-star.svg";
function Rating({ socialProof }) {
  const rate = socialProof.map((data) => {
    return data.rates.map((datas, index) => {
      return (
        <div className={`Rating ${datas.style}`} key={index}>
          <div className="Rating-star">
            <img src={star} alt="start-icon" className="start-icon" />
            <img src={star} alt="start-icon" className="start-icon" />
            <img src={star} alt="start-icon" className="start-icon" />
            <img src={star} alt="start-icon" className="start-icon" />
            <img src={star} alt="start-icon" className="start-icon" />
          </div>
          <h3 key={index}>{datas.data}</h3>
        </div>
      );
    });
  });
  return <> {rate}</>;
}

export default Rating;
