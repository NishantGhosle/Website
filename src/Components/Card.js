import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../111111111.jpg";

function Card(props) {
  return (
    <>
      
            <div className="col-md-4 col-10 mx-auto">
              <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                  Travelling also keeps away stress, depression, and anxiety. It provides a new atmosphere taking out a person from their comfort zone.
                  </p>
                  <NavLink to="/" className="btn btn-primary">
                   Book Now
                  </NavLink>
                </div>
              </div>
            </div>
    </>
  );
}

export default Card;
