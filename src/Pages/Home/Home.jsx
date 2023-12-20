import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
export default function Home() {
  return (
    <>
      <Header>
        <div className="home-header-banner">
            <div className="row align-content-center">
              <div className="col-12 col-lg-5 p-lg-5 text-center text-lg-start mt-5 mt-lg-0">
                <h1>Pets Boarding Services</h1>
              </div>

              <div className="col-12 col-lg-7">
                <img
                  className="img-fit"
                  src="/public/images/img-1.png"
                  alt="header-banner"
                />
              </div>
            </div>
        </div>
      </Header>
    </>
  );
}
