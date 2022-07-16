import "./App.css";
import Home from "./Components/Home";
import Service from "./Components/Service";
// import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path = "/" element ={<Home/>} />
          <Route exact path = "/home" element ={<Home/>} />
          <Route exact path = "/service" element ={<Service/>} />
          {/* <Route exact path = "/contact" element ={<Contact/>} /> */}
          <Route exact path = "/about" element ={<About/>} />
          {/* <Route
                   exact path="/redirect"
                    element={ <Navigate to="/service" /> }
                /> */}
        </Routes>
    </>
  );
}

export default App;
