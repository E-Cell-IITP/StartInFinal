import React from 'react'
import './navlog_sign_in.css'
import Carousal from '../components/carousel';
import Leaderboard from '../components/Leaderboard.js';
// import Team_register from './components/Team_register';
import Register from '../components/register';
import Dashboard1 from '../components1/Dashboard1';

const Navlog_sign_in = () => {
  return (
    <div>
    <div className="headofnav">
       <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="log_sign">
         <span onClick={()=>{window.location='/login'}}  className="login">Login</span>
         <span onClick={()=>{window.location='personal_register'}} className="sign">Register</span>
         <span onClick={()=>{window.location='teamregister'}} className="teamregister">TeamRegistration</span>
      </div>
    </div>
    {/* <Carousal/>
    <Leaderboard/>  */}
    {/* <Team_register/> */}
    {/* <Register/>
    <Dashboard1 /> */}
    </div>
    
  )
}

export default Navlog_sign_in
