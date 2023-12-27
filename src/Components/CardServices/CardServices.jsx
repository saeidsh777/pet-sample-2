import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  GlobeAmericas,
  House,
  Apple,
} from "react-bootstrap-icons";

import "./CardServices.css";

export default function CardServices({ icon, title, body }) {
  return (
    <div className="card-services d-flex flex-column">
      <div className="card-services-icon">
        {icon === "apple" ? (
          <Apple className="fs-3-6r green-t" />
        ) : icon === "github" ? (
          <Github className="fs-3-6r green-t" />
        ) : icon === "global" ? (
          <GlobeAmericas className="fs-3-6r green-t" />
        ) : (
          icon === "house" && <House className="fs-3-6r green-t" />
        )}
      </div>

      <h3 className="text-center text-lg-start text-wrap mt-5">{title}</h3>
      <p className="text-center text-lg-start my-4 flex">{body}</p>
      <Link className="text-center text-lg-start d-block orng-t">
        VIEW MORE <ArrowRight className="fs-4" />
      </Link>
    </div>
  );
}
