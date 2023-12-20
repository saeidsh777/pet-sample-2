import React, { useRef } from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
export default function TopBar() {
  const topBarElm = useRef();
  const menuExpandElm = useRef();

  function showMenu() {
    menuExpandElm.current.getAttribute("data-expand");
    menuExpandElm.current.classList.toggle("show-menu-expand");
  }
  
  return (
    <div ref={topBarElm} className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="left-header">
              <Link to="/" className="d-flex align-items-center gap-2">
                <div className="header-logo-box">
                  <img
                    className="img-fit"
                    src="/images/header-logo.png"
                    alt="logo"
                  />
                </div>
                <h3 className="mb-0">Pets</h3>
              </Link>
            </div>
          </div>

          <div className="col-6">
            <div className="right-header d-flex justify-content-end align-items-center">
              <nav className="d-none d-lg-block">
                <ul className="d-flex align-items-center justify-content-end gap-5 mb-0">
                  <li>
                    <Link className="link-item-menu" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="link-item-menu" to="/">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="link-item-menu" to="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-c1">LOGIN</Link>
                  </li>
                </ul>
              </nav>
              <div className="menu-icon-box d-lg-none">
                <List className="menu-icon" onClick={showMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={menuExpandElm}
        className="menu-expand d-lg-none"
        data-expand={true}
      >
        <nav className="p-3">
          <ul className="mb-0 p-0 d-flex flex-column justify-content-center gap-2">
            <li className="d-flex justify-content-center">
              <Link className="link-item-menu" to="/">
                Home
              </Link>
            </li>
            <li className="d-flex justify-content-center">
              <Link className="link-item-menu" to="/">
                Contact
              </Link>
            </li>
            <li className="d-flex justify-content-center">
              <Link className="link-item-menu" to="/">
                About Us
              </Link>
            </li>
            <li className="d-flex justify-content-center">
              <Link className="btn-c1">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
