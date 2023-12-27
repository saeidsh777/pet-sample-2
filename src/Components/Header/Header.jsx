import React, { useRef } from "react";
import TopBar from "../TopBar/TopBar";

import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="header">
      <TopBar />
      {children}
    </header>
  );
}
