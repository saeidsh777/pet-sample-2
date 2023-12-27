import React from "react";
import { Link } from "react-router-dom";

import "./WeCan.css";

export default function WeCan() {
  return (
    <section className="py-6 we-can overflow-x-hidden">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-7 pe-0">
          <img className="img-fit" src="/images/img-2.png" alt="animal" />
        </div>

        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0">
          <h2>We can keep</h2>
          <h2 className="orng-t">them happy</h2>

          <p className="fs-1-2r my-4 pe-lg-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            adipisci ut voluptatem maxime repudiandae fugit repellat molestiae,
            fuga voluptatum. Laudantium aperiam quidem dignissimos ullam,
            voluptates ut consequuntur cupiditate totam eligendi?
          </p>

          <Link to="/" className="btn-c1 d-block m-auto m-lg-0">
            BOOK NEW
          </Link>
        </div>
      </div>
    </section>
  );
}
