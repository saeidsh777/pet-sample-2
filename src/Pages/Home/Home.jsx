import React from "react";
import Header from "../../Components/Header/Header";
import { Github } from "react-bootstrap-icons";
import "./Home.css";
import BtnBone from "../../Components/BtnBone/BtnBone";
export default function Home() {
  return (
    <>
      <Header>
        <div className="home-header-banner">
          <div className="row align-content-center align-items-center">
            <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c">
              <h1>Pets Boarding Services</h1>

              <div className="d-flex align-items-center my-lg-4">
                <div className="pe-0 pe-lg-3 header-icon-parent">
                  <Github className="header-icon" />
                </div>
                <div className="ps-0 ps-lg-3">
                  <h3>Boarding Any Pets</h3>
                  <p className="mb-0 gray-t">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu dui non diam.
                  </p>
                </div>
              </div>

              <BtnBone/>
            </div>

            <div className="col-12 col-lg-7">
              <img
                className="img-fit"
                src="/images/img-1.png"
                alt="header-banner"
              />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
