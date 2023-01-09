import React, { useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './personal_register.css'
import fetchFoByDis from './Asyncc';
import axios from 'axios';
import * as Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Personal_Register = () => {
  const [FirstName,setFirstName]=useState("");
  const [LastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [Email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmpassword]=useState("");
  const [toggle,settoggle] = useState(true)
  const showToastMessage = (x) => {
    toast.success(`${x}`, {
        position: toast.POSITION.TOP_CENTER,
        className:'message_toast'
      });
};

  const showToastMessage1 = (x) => {
    toast.error(`${x}`, {
        position: toast.POSITION.TOP_CENTER,
        className:'message_toast'
      });
};

  async function funcc(){

    if(password!==""&&FirstName!==""&&LastName!==""&&username!==""&&Email!==""&&phone!==""&&confirmpassword!==""&&phone.length>=10&&phone.length<=12){
      settoggle(false);
      if(password===confirmpassword){
    let item={FirstName: FirstName,LastName: LastName,username: username,phone: parseInt(phone),Email: Email,password: password};
    // const body = JSON.stringify(item);
    let result = {};
  
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
    

    console.log(result);
    var x=result.data.message;
    showToastMessage(x)    // window.location='/'
    settoggle(true)
    setTimeout(()=>{window.location='/login'},1500)
  }catch(err){
    var g=err.response.data.message;
    showToastMessage1(g)    // window.location='/'
    // window.alert(g);
    console.log(err);
    settoggle(true)
    } 

   
  }

  else{
    showToastMessage1("password doesn't match");
    settoggle(true)
  }
}

  }
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span onClick={()=>{window.location='/'}} className="headingis">Start-In</span>
        {/* <ToastContainer/> */}
       </div>
      </div>
      {toggle ?
      <div className="loginboxbox1">
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
                <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter your Email Id'/>
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
           
          <div  onClick={()=>{ if(toggle){
            funcc();
            // if(ct){
              // showToastMessage();
              
              // setct(false)
              // window.location='/login';
            }
          }} className="submitbutton"  >
            Register
          </div>
          <ToastContainer/>
          {/* <div  onClick={()=>{window.location='/'}} className="alreadyAcc">
            Have account? Sign-In
          </div> */}
          
      </div>
      </div>
  :
  <div style={{ display: "flex", justifyContent: "center" }}>
  <Loader.Puff
    color="#00BFFF"
    height={50}
    width={50}
  /></div>
  }
    </div>
  )
}

export default Personal_Register
