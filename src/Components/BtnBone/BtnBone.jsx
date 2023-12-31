import React from "react";
import { Link } from "react-router-dom";

import "./BtnBone.css";

export default function BtnBone({ type, title }) {
  return (
    <>
      {type === "Link" && (
        <Link
          to="/"
          className="btn-bone d-flex align-items-center justify-content-center"
        >
          <span className="link-btn-bone">{title}</span>
        </Link>
      )}

      {type === "noLink" && (
        <div className="btn-bone d-flex align-items-center justify-content-center">
          <span className="link-btn-bone">{title}</span>
        </div>
      )}
    </>
  );
}
