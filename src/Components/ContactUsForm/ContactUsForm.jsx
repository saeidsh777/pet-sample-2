import React, { useEffect, useRef, useState } from "react";
import { CaretDownFill } from "react-bootstrap-icons";
import SelectInput from "../SelectInput/SelectInput";

import "./ContactUsForm.css";

export default function ContactUsForm() {

  return (
    <div className="contact-us-form p-5 gray-b">
      <form>
        <h5 className="orng-t">PLANNING A VACATION?</h5>
        <h2>Contact Us</h2>

        <SelectInput />

        <input
          className="input"
          type="number"
          min={0}
          max={100}
        />
      </form>
    </div>
  );
}
