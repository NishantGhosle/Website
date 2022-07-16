import React from "react";
// import web from "../header.jpg";

function Common(props) {
  return (
    <>
      <section className="d-flex align-items-center sec"> 
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                   {props.heading}
                  </h1>
                  <h2 className="my-3">We are the team of developers</h2>
                  <div className="mt-3">
                    <button className="btn btn-outline-primary get">
                      {props.btnname}
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header img">
                  <img src={props.imgsrc} className="img-fluid" alt="header image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
