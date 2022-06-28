import React from "react";

function Heading(props) {
  return (
    <div className="Heading">
      {props.heading}
      {props.paragraph}
    </div>
  );
}

export default Heading;
