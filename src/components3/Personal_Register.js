import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './personal_register.css'
import fetchFoByDis from './Asyncc';
import axios from 'axios';

const Personal_Register = () => {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [Email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");

  async function funcc(){
    let item={FirstName: FirstName,LastName: LastName,username: username,phone: parseInt(phone),Email: Email,password: password};
    // const body = JSON.stringify(item);
    let result = {};
  //   app.use(function(req, res, next) {
  //     res.setHeader('Access-Control-Allow-Origin', '*');
  //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  //     res.setHeader('Access-Control-Allow-Credentials', true);
  //     next();
  // });
    try{

    result = await axios.post("https://ecell-startin-backend.onrender.com/users/register",
    item,{
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': true
    }})
    // headers:{
    //   "Content-Type":'application/json',
    //   "Accept":'application/json'
    // }
    }catch(err){
      console.log(err.response.data.message);
    } 

    // result=await result.json();
    // setFirstName("");
    // setEmail("");
    // setUsername("");
    // setPhone("");
    // setPassword("");
    // setLastName("");
    console.log(result);
    // window.location='/'
  }
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span className="headingis" onClick={()=>{window.location = '/'}}>Start-In</span>
       </div>
      </div>
      <div className="loginbox">
            <div className="headinglogin">Register</div>
            <div className="FirstName sameone ">
                <label htmlFor="">First Name</label>
                <input value={FirstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='Enter your first name'/>
            </div>
            <div className="LastName sameone">
                <label htmlFor="">Last Name</label>
                <input value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Enter your last name'/>
            </div>
            <div className="LastName sameone">
                <label htmlFor="">UserName</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter a Username'/>
            </div>
            <div className="Email sameone">
                <label htmlFor="">Email</label>
                <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="tel"  placeholder='Enter your Email Id'/>
            </div>
            <div className="phone sameone">
                <label htmlFor="">Phone No.</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel"  placeholder='Enter your Phone no.'/>
            </div>
            <div className="passwordbox sameone">
                <label htmlFor="">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password'/>
            </div>
            <div className="passwordbox sameone">
                <label htmlFor="">Confirm Password</label>
                <input value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} type="password" placeholder='Confirm password'/>
            </div>
           
          <div  onClick={funcc} className="submitbutton"  >
            Register
          </div>
          {/* <div  onClick={()=>{window.location='/'}} className="alreadyAcc">
            Have account? Sign-In
          </div> */}
          
      </div>
    </div>
  )
}

export default Personal_Register
