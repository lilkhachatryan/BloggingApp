import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IT from "../assets/images/IT.jpg";
import Finance from "../assets/images/Finance.jpg";
import Travel from "../assets/images/Travel.jpg";


const Home = () => {
    return (
    <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Travel} alt="Travel" id ="img" className = "carousel-inner img"/>
    </div>
    <div className="carousel-item">
      <img src={IT} alt="IT"/>
    </div>
    <div className="carousel-item">
      <img src={Finance} alt="Finance"/>
    </div>
  </div>

  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

</div>
    )
};

export default Home;