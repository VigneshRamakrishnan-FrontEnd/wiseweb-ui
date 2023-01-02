import React from "react";

import img1 from "../../../assets/images/digital-marketing-seo1.jpg";
import img2 from "../../../assets/images/website-design2.jpg";
import img3 from "../../../assets/images/graphic-design3.jpg";
import img4 from "../../../assets/images/video-editing4.jpg";
import "../../../assets/css/layout1.css";

import Carousel from "react-bootstrap/Carousel";

export const Layout1 = () => {
  return (
    <div className=" container-fluid pt-5">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
