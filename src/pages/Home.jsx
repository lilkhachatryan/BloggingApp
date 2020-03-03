import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IT from "../assets/images/1.jpg";
import Finance from "../assets/images/2.jpg";
import Travel from "../assets/images/3.jpg";


const Home = (props) => {
  const { history } = props;

   const handleOnClick = () =>{
     console.log("button clicked");
   }
   console.log("carusel");
   
    return (
      <div className="container">
          <div id="demo" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active" onClick = {handleOnClick}>
            <img src={Travel} alt="Travel" id ="img" className = "carousel-inner img img-fluid"/>
            <div className = "imageName"> Travel </div>
          </div>
          <div className="carousel-item"onClick = {handleOnClick}>
            <img src={IT} alt="IT" className="img-fluid"/>
            <div className = "imageName"> Information Technologies </div>
          </div>
          <div className="carousel-item" onClick = {handleOnClick}>
            <img src={Finance} alt="Finance" className="img-fluid"/>
            <div className = "imageName"> Finance </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>

      </div>
</div>
    )
};

export default Home;