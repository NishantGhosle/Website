import React from "react";
import Common from "./Common";
import web from "../homeeeee.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Common heading = "Welcome To Our Tour" btnname = "Show more" imgsrc = {web}/>
    <h1 className="text-center my-2">Headlines</h1>
    <div className="container d-flex align-items-center justify-content-center">
    <div className="col-lg-6 my-5 ">
        <h3 className="display-5 1h-1 mb-3">News No.1</h3>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus repellat, nihil incidunt aut voluptatibus inventore quod, veniam laudantium rem a nam rerum aperiam nulla atque quisquam? Ipsam, optio deleniti.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-outline-primary btn-sm px-4 me-md-2">Read more</button>
        </div>
      </div>
      <div className="col-lg-6 my-3">
        <h3 className="display-5 1h-1 mb-3">News No.2</h3>
        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet maiores non ratione similique esse fugiat autem debitis iste! Atque culpa ipsam reiciendis recusandae autem provident maiores, laborum doloremque expedita magnam?</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-outline-primary btn-sm px-4 me-md-2">Read more</button>
        </div>
      </div>
    </div>
    <h1 className="text-center my-3">Our Plans</h1>
    <div class="row row-cols-1 row-cols-md-3 my-5 px-5 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-2">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users </li>
              <li>No child</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-2">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users</li>
              <li>10 Child</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm ">
          <div class="card-header py-2 ">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users</li>
              <li>15 Child</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
