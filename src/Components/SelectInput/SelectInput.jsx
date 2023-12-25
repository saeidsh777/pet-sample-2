import React, { useEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";

import "./SelectInput.css";

export default function SelectInput() {

  const [inputSelectValue, setInputSelectValue] = useState("Dog Boarding");
  const selectListElem = useRef();
  const selectTagElem = useRef();

  useEffect(() => {
    let mouseEventClick = document.addEventListener("mouseup", (e) => {
      if (selectListElem.current.contains(e.target)) {
        setInputSelectValue(e.target.textContent.trim());
      }
      if (!selectTagElem.current.contains(e.target)) {
        selectListElem.current.classList.remove("d-block");
      }
    });

    return () => document.removeEventListener("mouseup", mouseEventClick);
  }, []);

  const showSelectList = (e) => {
    e.button == 0 && selectListElem.current.classList.toggle("d-block");
  };

  return (
    <div className="select-input">
      <div
        className="select-tag d-flex justify-content-between align-items-center"
        onMouseUp={(e) => showSelectList(e)}
        ref={selectTagElem}
      >
        <span>{inputSelectValue}</span>
        <CaretDownFill />
      </div>

      <ul className="select-list shadow-sm" ref={selectListElem}>
        <li className="select-list-item">Dog Boarding</li>
        <li className="select-list-item">Cat Boarding</li>
        <li className="select-list-item">Other Pets</li>
      </ul>
    </div>
  );
}
