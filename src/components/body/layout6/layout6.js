import React from "react";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import img1 from "../../../assets/images/website1.jpeg";
import img2 from "../../../assets/images/website2.jpeg";
import img3 from "../../../assets/images/website3.jpeg";
import img4 from "../../../assets/images/website4.webp";
import img5 from "../../../assets/images/website5.jpeg";
import img6 from "../../../assets/images/website-6.jpeg";
import img7 from "../../../assets/images/website7.jpeg";
import img8 from "../../../assets/images/website8.png";
import img9 from "../../../assets/images/website9.jpeg";
import img10 from "../../../assets/images/website10.jpeg";
import img11 from "../../../assets/images/website11.png";
import img12 from "../../../assets/images/website12.png";
import "../../../assets/css/layout6.css";

export const Layout6 = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container d-xl-flex justify-content-between">
        <h5>
          <span className="text-danger fs-4">
            <MdOutlineAlignHorizontalLeft />
          </span>{" "}
          DIGITAL MARKETING SERVICES
        </h5>

        <h5 className="text-primary">OUR CLIENTS</h5>
      </div>

      <div className="text-center pt-5">
        <p className="display-5 fw-bolder text-dark">
          Website Design Firm Chennai - Checkout our Latest Portfolios
        </p>

        <p className="text-secondary pt-5">
          WiseWebTek, a leading professional web design company in chennai,
          providing the best web design services at affordable price. Having 10+
          years of experience in website design and digital marketing, we can
          provide you the high quality and professional web design and digital
          marketing services..Contact us now!!
        </p>
      </div>

      <div className="pt-5">
        <div class="row d-xl-flex  ">
          <div class=" col-sm-6 col-md-4 col-xs-12  pt-3">
            <div class="screen">
              <a href="http://www.redgiantmovies.in/" target="_blank">
                {" "}
                <img src={img1} alt=" web design" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="http://www.hotchipsrestaurants.com/" target="_blank">
                {" "}
                <img src={img2} alt=" web design" />
              </a>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-xs-12  pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://chennaischoolofbanking.com/" target="_blank">
                {" "}
                <img src={img3} alt="web design" />
              </a>
            </div>
          </div>
        </div>

        <div class="row d-xl-flex  pt-xl-3 pt-lg-3 pt-md-3">
          {" "}
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="http://cpcdiagnostics.in/" target="_blank">
                {" "}
                <img src={img4} alt="web design" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="http://harrisonsteaextracts.com/" target="_blank">
                {" "}
                <img src={img5} alt="web design" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://www.mallikaresidency.com/" target="_blank">
                {" "}
                <img src={img6} alt="web design" />
              </a>
            </div>
          </div>
        </div>

        <div class="row d-xl-flex pt-xl-3 pt-lg-3 pt-md-3">
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://kmcldiamonds.com/" target="_blank">
                {" "}
                <img src={img7} alt="web design" />
              </a>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://xquisiteevents.in/" target="_blank">
                {" "}
                <img src={img8} alt="web design" />
              </a>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://www.newseoulhotels.com/" target="_blank">
                {" "}
                <img src={img9} alt="web design" />
              </a>
            </div>
          </div>
        </div>

        <div class="row d-xl-flex pt-xl-3 pt-lg-3 pt-md-3">
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://www.everwoodwpc.com/" target="_blank">
                {" "}
                <img src={img10} alt="web design" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="http://karpagavijayammatrimony.com/" target="_blank">
                {" "}
                <img src={img11} alt="web design" />
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 pt-3">
            <div class="screen" data-duration="2000">
              <a href="https://jssrenewable.com/" target="_blank">
                {" "}
                <img src={img12} alt="web design" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
