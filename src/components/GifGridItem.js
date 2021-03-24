import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__fadeInUp">
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  );
};

export default GifGridItem;
