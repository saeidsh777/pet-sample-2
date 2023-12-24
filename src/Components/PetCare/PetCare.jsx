import React from "react";
import { Link } from "react-router-dom";
import "./PetCare.css";
import { House } from "react-bootstrap-icons";

export default function PetCare() {
  return (
    <section className="pet-care mb-5">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 col-lg-3">
            <h5 className="orng-t mb-3">BRING YOUR PET</h5>
            <h2 className="mb-3">The Best Choice</h2>
            <p className="fs-1-2r mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              molestias?
            </p>
            <Link className="btn-c2 d-block" to="/">
              GET QUOTE
            </Link>
          </div>

          <div className="col-12 col-lg-3">
            <div className="pet-care-card">
              <h5 className="orng-t mb-3">PET CARE</h5>
              <h2 className="mb-3">1 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Double room</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Socialise</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Brush</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Pet TV</p>
                  <span className="orng-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">50</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="pet-care-card orng-b">
              <h5 className="white-t mb-3">PET CARE</h5>
              <h2 className="white-t mb-3">10 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Double room</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Socialise</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Brush</p>
                  <span className="white-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0 white-t">Pet TV</p>
                  <span className="white-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box white-t">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">50</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="pet-care-card">
              <h5 className="orng-t mb-3">PET CARE</h5>
              <h2 className="mb-3">20 Day</h2>
              <h2>
                <House />
              </h2>
              <ul className="m-0 p-0 mt-4">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Double room</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Socialise</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Brush</p>
                  <span className="green-t">&#10003;</span>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <p className="m-0">Pet TV</p>
                  <span className="orng-t">&#x2715;</span>
                </li>
              </ul>
              <div className="mt-5 care-price-box">
                <span className="align-top fw-bold fs-2">$</span>
                <span className="care-price">50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
