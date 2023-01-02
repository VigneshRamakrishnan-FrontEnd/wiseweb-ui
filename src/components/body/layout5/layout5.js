import React from "react";
import img1 from "../../../assets/images/smm1.jpg";
import img2 from "../../../assets/images/seo2.jpg";
import img3 from "../../../assets/images/sem3.jpg";
import img4 from "../../../assets/images/gdd4.jpg";
import "../../../assets/css/layout5.css";
export const Layout5 = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center">
        <p className="display-5 fw-bolder text-dark">
          Digital Marketing Services/Agency in Chennai
        </p>

        <p className="text-secondary pt-5">
          Do you want your Website to be on top in Google Listing ? <br />
          <br /> We can provide you the best SEO Services . WiseWebTek, a
          leading professional web design and digital marketing company in
          chennai, providing the best web design and <br /> <br /> digital
          marketing services at affordable price.
        </p>
      </div>
      <div className="container d-xl-flex d-lg-flex row mx-auto pt-5 ps-xl-5">
        <div className="col-xl-4 col-lg-6   pt-5">
          <ul>
            <li>
              <h4 className="fw-bold">Search Engine Optimization (SEO)</h4>{" "}
              <br />
              <span className="text-secondary lh-lg">
                If you are serious about your business, you cannot ignore the
                search engine. Every day, there are millions of searches
                conducted online.
              </span>
            </li>
            <br />
            <br />
            <li>
              <h4 className="fw-bold"> Search Engine Marketing (SEM)</h4>
              <br />
              <span className="text-secondary lh-lg">
                {" "}
                Advertising on Facebook makes it easy to find the right people,
                capture their attention and get results.
              </span>
            </li>
            <br />
            <br />
            <li>
              <h4 className="fw-bold"> Social Media Marketing (SMM) </h4>
              <br />
              <span className="text-secondary lh-lg">
                Social Media Marketing is the process of gaining website traffic
                or attention through social media sites.
              </span>
            </li>
            <br />
            <br />
            <li>
              {" "}
              <h4 className="fw-bold">Google Adwords</h4>
              <br />
              <span className="text-secondary lh-lg">
                Whether you’re looking to bring in new website visitors, grow
                online sales, get the phones ringing or keep customers coming
                back for more
              </span>
            </li>
          </ul>
        </div>
        <div className="col-xl-8  col-lg-6 allimages">
          <div>
            <img src={img1} alt="" width="100%" />
          </div>
          <div>
            <img src={img2} alt="" width="100%" />
          </div>
          <div>
            <img src={img3} alt="" width="100%" />
          </div>
          <div className="ps-xl-5">
            <img src={img4} alt="" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
