import React from "react";
// import profile from "../Images/image-irene.jpg";
function Review({ socialProof }) {
  const review = socialProof.map((data) => {
    return data.reviews.map((d) => {
      // const profile = `"${d.imgUrl}"`;
      const src = require(`../Images/${d.imgUrl}`);
      return (
        <div className={`Review ${d.style}`} key={d.id}>
          <div className="Review-profile">
            <img src={src} alt="profile-img" className="Review-profile-img" />
            <div className="Review-profile-text">
              <h4>{d.name}</h4>
              <p>{d.type}</p>
            </div>
          </div>
          <div className="Review-text">
            <p>"{d.note}"</p>
            <p>{d.imgUrl}</p>
          </div>
        </div>
      );
    });
  });
  return <>{review}</>;
}

export default Review;
