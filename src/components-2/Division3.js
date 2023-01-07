import React from 'react'
import "./division3.css"

import Tophead1 from './TopHead1'
import Food1 from './Food1';
import Services1 from './Services1';
import Others1 from './Others1';
import foodimg from '../images/Rectangle\ 6.jpg';
import serviceimg from "../images/business-people-casual-meeting_53876-101882\ 1.jpg";
import otherimg from "../images/4p-marketing-concept-product-manufacturing-strategy-modern-marketing-theory-products-distribution-locations-selling-prices-public-relations_48954-484\ 1.jpg";
import {
    BrowserRouter as Router,
    Routes,
    NavLink,
    Route,
    Link
  } from 'react-router-dom';
  function food1(e){
    e.preventDefault();
    window.location='/';
  };
   

 
const Division3 = () => {
  // render(){
    return (
      <>
      <div className="threebox">
      <div onClick={(e) => {food1(e)}} className="box1 boxo">
      
          <img src={foodimg} alt="" />
          <div className="textt">Food</div>
      </div>
      
      <div onClick={()=>{window.location='/'}} className="box2 boxo">
        <img src={serviceimg} alt="" />
        <div className="textt">Services</div>
      </div>
      <div onClick={()=>{window.location='/'}} className="box3 boxo">
        <img src={otherimg} alt="" />
        <div className="textt">Others</div>
      </div>
      </div>
    </>
  );
// }
}


export default Division3
