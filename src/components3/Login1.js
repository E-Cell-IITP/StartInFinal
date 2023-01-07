import { useState,React } from 'react'
import './login1.css'

const Login1 = () => {
  const [username,setusername]=useState("");
  const [password,setPassword]=useState("");

  async function funcc(){
    let item={username,password};
    console.log(item);
    const body = JSON.stringify(item);
    let result=await fetch("http://localhost:4000/users/login",
   { method:'POST',
    body:body,
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }}
    )
    result=await result.json();
    console.log(result);
  }
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span className="headingis">Start-In</span>
       </div>
      </div>
      <div className="_loginbox">
            <div className="_headinglogin">Sign In</div>
            <div className="_emailbox">
                <label  htmlFor="">username</label>
                <input value={username} onChange={(e)=>setusername(e.target.value)} type="username" placeholder='Enter your username'/>
            </div>
            <div className="_passwordbox">
                <label htmlFor="">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password'/>
            </div>
          
          <div onClick={funcc} className="_submitbutton">
            Sign In
          </div>   
          <p className="_forgot-password">
            Forgot <a href="#">password?</a>
        </p>
        <div  onClick={()=>{window.location='/Navlogin_register'}} className="_Donthave">
           Don't have Account? Register
          </div>
      </div>
    </div>
  )
}

export default Login1
