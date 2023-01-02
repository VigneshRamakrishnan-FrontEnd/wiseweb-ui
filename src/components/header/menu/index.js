import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import "../../../assets/css/menu.css";

export const Menu = () => {
  return (
    <div className="container-fluid">
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container-fluid text-center  d-lg-flex d-sm-inline-flex">
            <div>
              <a class="navbar-brand" href="#"></a>
              <button
                class="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar1"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              class="collapse navbar-collapse text-light row  d-lg-flex d-sm-inline-flex  "
              id="collapsibleNavbar1"
            >
              <ul class="navbar-nav  col-xl-4 col-lg-4 col-md-1  gap-xl-3">
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    <SiWhatsapp />
                    <p class="d-md-none d-lg-inline d-xl-inline ps-xl-3 ps-lg-2 pt-xl-1 pt-lg-1">
                      Whatsapp
                    </p>
                  </a>
                </li>
                <li class="nav-item d-md-none d-lg-inline d-xl-inline ">
                  <a class="nav-link" href="#">
                    <FiPhoneCall /> (+91) 9080248247
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav  col-xl-6  col-lg-5 col-md-7   gap-xl-5">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button className=" bg-warning text-danger border-0 rounded">
                      Request Quote
                    </button>
                  </a>
                </li>
                <li class="nav-item  ">
                  <a class="nav-link" href="#">
                    <button className=" bg-secondary text-light border-0 rounded">
                      Download Brochure
                    </button>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    <button className=" bg-danger text-warning border-0 rounded">
                      Videos
                    </button>
                  </a>
                </li>
              </ul>
              <ul className="text-light navbar-nav col-xl-2  col-lg-1  col-md-4 gap-xl-3">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Client
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
