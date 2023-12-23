import React from 'react'
import './BtnBone.css'
import { Link } from 'react-router-dom';
export default function BtnBone() {
  return (
    <Link className="btn-bone d-flex align-items-center justify-content-center">
      <span className="link-btn-bone" to="/">
        BOOK NOW
      </span>
    </Link>
  );
}
