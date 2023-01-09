import { useState,React } from 'react'
import './login1.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as Loader from 'react-loader-spinner';






const Login1 = () => {
  const [username,setusername]=useState("");
  const [password,setPassword]=useState("");
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
    let item={username,password};
    if(username!==""&&password!==""){
      settoggle(false)
    console.log(item);
    // const body = JSON.stringify(item);
    // settoggle(false);
    let result={};
    try{
      result=await axios.post("https://ecell-startin-backend.onrender.com/users/login",
      item,{
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }}
    )
    // result=await result.json();
    console.log(result);
    if(result.status===200){
    var x=result.data.data.token;
    var y=result.data.data.username;
    // console.log(y);
    const z = result.data.message;
    const k = result.data.data.teamName;
    console.log(z);
    settoggle(true);
    showToastMessage(z)
    localStorage.setItem('token',x);
    localStorage.setItem('username',y);
    localStorage.setItem('teamName',k);
    setTimeout(() => {
      window.location='/dashboard'
    }, 3000);
  }
  else{
      const z = result.data.message;
      showToastMessage(z)
      settoggle(true)
    }
  }catch(err){
    console.log(err);
    var x = err.response.data.message;
    settoggle(true)
    showToastMessage1(x)
  }
}
}
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span onClick={()=>{window.location='/'}} className="headingis s1">Start-In</span>
       </div>
      </div>
      {toggle?
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
          
          <div onClick={()=>{if(toggle)funcc();}} className="_submitbutton">
            Sign In
          </div>   
          <ToastContainer/>
          {/* <p className="_forgot-password">
            Forgot <a href="#">password?</a>
        </p> */}
        <div  onClick={()=>{window.location='/personal_register'}} className="_Donthave">
           Don't have Account? Register
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

export default Login1
