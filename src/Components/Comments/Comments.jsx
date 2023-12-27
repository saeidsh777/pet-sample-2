import React from "react";
import { Quote } from "react-bootstrap-icons";

import "./Comments.css";

export default function Comments() {
  return (
    <section className="py-6 comments overflow-x-hidden">
      <div className="row align-content-center align-items-center">
        <div className="col-12 col-lg-7 pe-0">
          <img className="img-fit" src="/images/img-4.png" alt="animal" />
        </div>
        <div className="col-12 col-lg-5 text-center text-lg-start mt-5 mt-lg-0">
          <Quote className="fs-6r orng-t" />
          <h3 className="my-4 pe-lg-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            adipisci ut voluptatem maxime
          </h3>

          <h4 className="orng-t fw-bold">Boby James</h4>
          <h4>Hamster</h4>
        </div>
      </div>
    </section>
  );
}
