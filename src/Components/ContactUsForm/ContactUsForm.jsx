import SelectInput from "../SelectInput/SelectInput";

import "./ContactUsForm.css";
import Input from "../Input/Input";

export default function ContactUsForm() {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us-form p-5 gray-b">
      <form>
        <h5 className="orng-t">PLANNING A VACATION?</h5>
        <h2>Contact Us</h2>

        <div className="form-inputs d-flex flex-column gap-3">
          <SelectInput />

          <Input type="number" />

          <Input type="email" />

          <button
            className="btn-c2 w-100 d-block"
            onClick={(e) => onSubmitForm(e)}
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
