import React from "react";
import BtnBone from "../BtnBone/BtnBone";

import "./PetBoardingOff.css";

export default function PetBoardingOff() {
  return (
    <section className="pet-boarding-off py-6 mt-5">
      <div className="container">
        <div className="pet-off">
          <div className="row p-5">
            <div className="col-12 col-xl-4">
              <h2 className="white-t word-break">Pets Boarding</h2>
              <h2>40% OFF</h2>
            </div>
            <div className="pet-off-img-container col-12 col-xl-4 position-relative mt-3 mt-lg-0">
              <img
                className="pet-off-img mx-auto d-block"
                src="/images/img-7.png"
                alt=""
              />
            </div>
            <div className="col-12 col-xl-4 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
              <BtnBone type="Link" title="BOOK NEW" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
