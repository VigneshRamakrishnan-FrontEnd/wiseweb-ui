import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="container-fluid pt-5 text-md-center text-sm-center">
      <footer className="  bg-dark text-light p-4">
        <div class="container">
          <div class="row ">
            <div class="col-lg-3  text-left ">
              <div class="gap-3 d-flex">
                <div>
                  {" "}
                  <a
                    class="twi"
                    href="https://twitter.com/wisewebtek"
                    target="_blank"
                  >
                    <AiFillTwitterCircle />
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    class="pin"
                    href="https://in.pinterest.com/wisewebtek/"
                    target="_blank"
                  >
                    <BsPinterest />
                  </a>
                </div>

                <div>
                  {" "}
                  <a
                    class="fac"
                    href="https://www.facebook.com/wisewebtek.india"
                    target="_blank"
                  >
                    <BsFacebook />
                  </a>
                </div>

                <div>
                  <a
                    class="you"
                    href="https://www.youtube.com/channel/UC0UgReCUpvi8bqLOlVanp-A"
                    target="_blank"
                  >
                    <TiSocialYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 pt-xl-0 pt-lg-0 pt-md-3 pt-3 ">
              <p>
                <BsFillTelephoneFill />
                (+91) 9080248247
                <br />{" "}
                <a href="#" className="text-light">
                  <MdMailOutline />
                  contact@wisewebtek.com
                </a>
              </p>
            </div>
            <div class="col-lg-3 ">
              <p>
                <ImLocation />
                No.20/9,Janaki Complex ,Sardar Patel Road,Adyar
                Chennai-600020,India.
              </p>
            </div>
            <div class="col-lg-3 ">
              <p>
                Copyrights © 2019 WiseWebTek
                <br />
                All Rights Reserved{" "}
                <a href="https://wisewebtek.com/">WiseWebTEk</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
