import React from "react";
import logo from "../../../assets/images/logo-wwt-1.png";
import "../../../assets/css/menu.css";

export const Menu2 = () => {
  return (
    <div class="container-fluid ">
      <nav class=" navbar navbar-expand-sm bg-light navbar-light menu ">
        <div class="container-fluid row flex-lg-wrap  flex-md-wrap gap-xl-5">
          <div className=" col-xl-2  col-lg-12">
            <img src={logo} alt="logo" />
          </div>

          <div className=" d-xxl-none  d-xl-none  d-lg-none  d-md-none  d-sm-inline ">
            <div className="ps-4 pt-3 ">
              {" "}
              <button
                class="navbar-toggler border-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar2"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            class="collapse navbar-collapse text-light text-center menu2 d-sm-inline-flex  col-xl-8 col-lg-12 col-md-6"
            id="collapsibleNavbar2"
          >
            <ul class="navbar-nav ps-lg-3  tex-center flex-wrap ">
              <li class="nav-item ">
                <a class="nav-link " href="#">
                  <span> ABOUT US</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="#">
                  <span> WEB DESIGN</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="#">
                  <span class="blink_me text-danger">2D/3D ANIMATION</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link fs-6 " href="#">
                  <span>WEB ACCESSIBILITY</span>

                  <div class="loader">
                    <div class="loaderBar"></div>
                  </div>
                </a>
              </li>

              <li class="nav-item ">
                <a class="nav-link fs-6" href="#">
                  <span>DIGITAL MARKETING</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link fs-6" href="#">
                  <span>WEB SECURITY</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link fs-6" href="#">
                  <span> DEVELOPMENT</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link fs-6" href="#">
                  <span>WEBDESIGN FOR STARTUP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
