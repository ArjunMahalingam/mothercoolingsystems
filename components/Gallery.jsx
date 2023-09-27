import React from "react";
import "../Style/Gallery.css";
import { Outlet } from "react-router";

const Gallery = () => {
  const images = [
    {
      url: require("../Images/mcs3.jpg"),
      description: "Daikin installation",
    },
    {
      url: require("../Images/mcs13.jpg"),
      description: "ICE MAKE installation",
    },
    {
      url: require("../Images/mcs19.jpg"),
      description: "Carrier installation",
    },
  ];
  return (
    <>
      <div className="Gallery1">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={image.description} />
            <div className="imgtext">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Gallery;
