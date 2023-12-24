import React from "react";
import "./CheckInTime.css";
import { Stopwatch, GlobeAmericas } from "react-bootstrap-icons";
import BtnBone from "../BtnBone/BtnBone";
export default function CheckInTime() {
  return (
    <section className="check-in-time py-6">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0 ps-c">
          <h2>Check-in Time</h2>

          <div className="d-flex flex-column flex-lg-row my-4 justify-content-center">
            <div className="px-2">
              <Stopwatch className="fs-3-6r green-t" />
            </div>
            <div className="px-3">
              <h3 className="orng-t">FROM 8 TO 10 AM</h3>
              <p className="mb-0 fs-1-2r">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dui non diam.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row my-4 justify-content-center">
            <div className="px-2">
              <GlobeAmericas className="fs-3-6r green-t" />
            </div>
            <div className="px-3">
              <h3 className="orng-t">FAVOURITE TOYS</h3>
              <p className="mb-0 fs-1-2r">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dui non diam.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <BtnBone
              type="noLink"
              title="+1(800) 456 888"
            />
          </div>
        </div>

        <div className="col-12 col-lg-7 pe-0">
          <img
            className="img-fit"
            src="/images/img-5.png"
            alt="header-banner"
          />
        </div>
      </div>
    </section>
  );
}
