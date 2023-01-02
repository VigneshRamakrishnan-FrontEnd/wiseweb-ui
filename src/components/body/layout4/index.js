import React from "react";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../../assets/css/layout4.css";

export const Layout4 = () => {
  return (
    <div className="container pt-xl-3">
      <div className="d-xl-flex justify-content-between">
        <h5>
          <span className="text-danger fs-4">
            <MdOutlineAlignHorizontalLeft />
          </span>{" "}
          WELCOME TO WWT SERVICES
        </h5>

        <h5 className="text-primary">OUR PORTFOLIO</h5>
      </div>

      <div className="text-center pt-5">
        <p className="display-5 fw-bolder text-dark">
          Affordable Web Design and SEO Packages <br /> Chennai!!!
        </p>
        <div className="container d-lg-flex align-items-center justify-content-evenly main">
          <div className="cardbox pt-5">
            <Card className=" border-0  pt-lg-2">
              <Card.Title className="bg-primary rounded p-xl-5 p-lg-5 p-md-5 p-4  text-center text-light">
                Startup Web Design Package
              </Card.Title>

              <Card.Body>
                <div className="text-start">
                  <Card.Title> @Just ₹ 6999</Card.Title>
                  <Card.Text>
                    <b className="text-secondary ">
                      Single Page Responsive Design
                    </b>{" "}
                    (Mobile Compatible)
                  </Card.Text>
                  <Card.Text>Single domain name registration</Card.Text>
                  <Card.Text>
                    {" "}
                    Basic web hosting for 1 year ( Space: 200 MB)
                  </Card.Text>
                </div>
                <div className="pt-5">
                  <Button variant="dark" className="w-100 p-4">
                    <small>Check Out</small>
                  </Button>
                </div>
              </Card.Body>

              <Card.Title className="bg-primary rounded-bottom p-3 text-center text-light shadow-lg"></Card.Title>
            </Card>
          </div>

          <div className=" cardbox pt-5 ">
            <Card className=" border-0 pt-lg-2">
              <Card.Title className="bg-danger p-xl-5 p-lg-5 p-md-5 p-4   rounded  text-center text-light">
                Search Engine Optimization Packages
              </Card.Title>

              <Card.Body>
                <div className="text-start">
                  <Card.Title className="">@Just ₹ 10000 per/month</Card.Title>
                  <Card.Text className="text-secondary pt-lg-4 ">
                    On-page SEO
                  </Card.Text>
                  <Card.Text className="text-secondary ">
                    Off-page SEO
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    Keywords Search(2 keywords)
                  </Card.Text>
                </div>
                <div className="pt-5">
                  <Button variant="dark" className="w-100 p-4 ">
                    <small>Check Out</small>
                  </Button>
                </div>
              </Card.Body>

              <Card.Title className="bg-primary rounded-bottom p-3 text-center text-light shadow-lg"></Card.Title>
            </Card>
          </div>
          <div className=" cardbox pt-5">
            <Card className=" border-0 pt-lg-2 ">
              <Card.Title className="bg-secondary rounded p-xl-5 p-lg-4 p-md-5 p-4 text-center text-light">
                Creative Design for startups
              </Card.Title>

              <Card.Body>
                <div className="text-start">
                  <Card.Title>@Just ₹ 12999</Card.Title>
                  <Card.Text className="text-secondary pt-lg-3">
                    Logo Design
                  </Card.Text>
                  <Card.Text className="text-secondary pt-lg-1">
                    Visiting Card Design
                  </Card.Text>
                  <Card.Text className="text-secondary pt-lg-1">
                    Letter Head Design
                  </Card.Text>
                  <Card.Text className="text-secondary pt-lg-1">
                    Single Page Responsive Website Design
                  </Card.Text>
                </div>
                <div className="pt-5 ">
                  <Button variant="dark" className="w-100 p-4">
                    <small>Check Out</small>
                  </Button>
                </div>
              </Card.Body>

              <Card.Title className="bg-primary rounded-bottom p-3 text-center text-light shadow-lg"></Card.Title>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
