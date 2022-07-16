import React from "react";
import Common from "./Common";
// import Form from "./Form";
import Footer from "./Footer";

function Form(props) {
  return (
    // <Common heading = "Welcome to our Contact Page" btnname = "Contact Click" imgsrc = {web}/>
    <>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            {props.label}
          </label>
          <input
            type={props.type}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder={props.placeholder}
          />
        </div>
      </form>
      <Footer/>
    </>
  );
}

export default Form;
