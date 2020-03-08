import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IT from "../assets/images/1.jpg";
import   Finance from "../assets/images/2.jpg";
import Travel from "../assets/images/3.jpg";
import {Card, Button, Form} from "react-bootstrap";
import AllPosts from "../components/AllPosts";
import { usePostsFetch } from '../pages/Posts/hooks';
import { useEffect } from "react";

const Home = (props) => {
  const { history } = props;
  const [topic, setTopic] = useState("IT")
  const [{ state, loading, error }, fetchPosts] = usePostsFetch({ topic});

  const handleOnClick = (e) =>{
      console.log("clicked", e.target.alt);
      fetchPosts({topic: e.target.alt})
      setTopic(e.target.alt);
  }
  console.log("topic", topic);
 
    return (
      <>
        <div className="container">
            <div id="demo" className="carousel slide" data-ride="carousel">

              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <img src={Travel} alt="Travel" id ="img" className = "carousel-inner img img-fluid" onClick = {handleOnClick}/>
                  <div className = "imageName"> Travel </div>
                </div>
                <div className="carousel-item">
                  <img src={IT} alt="IT" className="img-fluid" onClick = {handleOnClick} />
                  <div className = "imageName"> Information Technologies </div>
                </div>
                <div className="carousel-item" >
                  <img src={Finance} alt="Finance" className="img-fluid" onClick = {handleOnClick} />
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
          <AllPosts posts={state.posts} isDelete={false}/>

        
        </div>
    </>)
};

export default Home;