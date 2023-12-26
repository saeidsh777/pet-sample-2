import React from "react";
import "./Footer.css";
import { Clock, Github, Key, Linkedin, PinMap, Telegram, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-center gap-2 mb-4">
                <img width="30rem" src="/images/header-logo.png" alt="logo" />
                <h3 className="mb-0">PetsM4</h3>
              </div>

              <div className="d-flex align-items-center gap-3">
                <Link className="social-media-box">
                  <Linkedin className="social-media" />
                </Link>
                <Link className="social-media-box">
                  <Telegram className="social-media" />
                </Link>
                <Link className="social-media-box">
                  <Github className="social-media" />
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <h3 className="orng-t mb-4 text-center text-lg-start">About</h3>

              <p className="mb-1 d-flex gap-2 align-items-center">
                <Clock />
                PO BOX Collins Street West
              </p>
              <p className="mb-1 d-flex gap-2 align-items-center">
                <Key />
                Mon - Sun: 8AM - 8PM
              </p>
              <p className="mb-1 d-flex gap-2 align-items-center">
                <PinMap />
                +2342 5446 67
              </p>
            </div>

            <div className="col-md-6 col-lg-3">
              <h3 className="orng-t mb-4 text-center text-lg-start">
                Quick Links
              </h3>

              <p className="mb-1 d-flex gap-2 align-items-center">
                Dog Boarding Services
              </p>

              <p className="mb-1 d-flex gap-2 align-items-center">
                Cat Boarding Services
              </p>

              <p className="mb-1 d-flex gap-2 align-items-center">
                Spa and Grooming Services
              </p>
            </div>

            <div className="col-md-6 col-lg-3">
              <form>
                <h3 className="orng-t mb-4 text-center text-lg-start">
                  Newsletter
                </h3>

                <input placeholder="Your email" type="email" className="input-c text-align-center"/>

                <button className="btn-c2 w-100 mt-3">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
