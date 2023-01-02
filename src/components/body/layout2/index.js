import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../../assets/css/layout2.css";
import slidewheel from "../../../assets/images/about-image-1.jpg";
import wheel from "../../../assets/images/wheel.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Layout2 = () => {
  AOS.init();

  return (
    <div className="container-fluid pt-xl-5  pt-lg-3 pt-md-5 pt-5 ">
      <div className=" h pt-5">
        <div className="text-center d-xl-flex d-lg-flex  align-items-center justify-content-around">
          <div className="displayheading">
            <h1 className="fw-bolder fs-lg-6 display-4   ">
              Our Corporate <br /> Video
            </h1>
            <p className="text-secondary">
              It's our great pleasure to launch the corporate video.
            </p>
            <button className="mt-3 p-xl-3 p-lg-2 p-md-2 p-2 bg-primary text-light border-0">
              Check out Here <AiOutlineArrowRight />
            </button>
          </div>
          <div className="pt-md-5 pt-xl-0   ">
            <iframe
              className="ifm"
              src="https://www.youtube.com/embed/aExXcUkGcgY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="container pt-xl-3 pt-lg-3 d-xl-flex  d-lg-flex d-md-inline-block text-md-left   align-items-center justify-content-center gap-xl-3 gap-lg-3">
          <div>
            <div data-aos="fade-right" className="sliding pt-xl-5">
              <div>
                <img src={slidewheel} className="wheelimg" alt="wheel" />
              </div>
            </div>
          </div>

          <div className=" pt-xl-5 pt-md-3 pt-3 displayheading" id="d2">
            <h1 className="fw-bolder fs-lg-6 display-4 ">
              Digital Marketing <br /> Company In Chennai
            </h1>
            <p className="text-secondary lh-lg ">
              WiseWebTek is a Software Company, Provides E-Commerce Solutions.
              With Our best software technologies, we will help the Business
              community to reach their goals faster. Having supported many
              Companies to create their Online solutions, we will continue to
              provide the best support to the global business community.
            </p>
            <div className=" d-xl-flex d-lg-flex flex-row-reverse">
              <button className="p-2 p-xl-3 p-lg-2 p-md-2  bg-primary text-light border-0 ">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
