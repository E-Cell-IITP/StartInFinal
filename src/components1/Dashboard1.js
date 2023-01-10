import React,{useEffect,useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './dashboard1.css'
// import profit1 from '../images/profit1.jpeg';
import rectimg from '../images/Rectangle\ 57.jpg'
import elipimg1 from '../images/Ellipse\ 5.jpg'
import elipimg2 from '../images/Ellipse\ 6.jpg'
import elipimg3 from '../images/Ellipse\ 7.jpg'
import Datatable from './Datatable';
import Todayprofit from './Todayprofit';
import axios from 'axios';
import * as Loader from 'react-loader-spinner';


const Dashboard1 = () => {
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [amount, setAmount] = useState(0);
  function useAuth() {
    return localStorage.getItem('username');
  }
  var xx=useAuth();
  
  function createData(sno,amount, date,timeofentry, name) {
    return {sno,amount, date,timeofentry, name};
  }
  let initTodo;
  if(localStorage.getItem('rows')===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem('rows'));
  }
  const getPaymentStatus = async () => {
    let item = {'token' : localStorage.getItem('token')}
    if(localStorage.teamName!=='null')
    {
      try{
      const result = await axios.post("https://ecell-startin-backend.onrender.com/users/get-team-from-token", item,
      {headers:{
        "Content-Type":'application/json',
        "Accept":'application/json',
      }}
      );
      console.log(result.data.data);
      const dd = result.data.data;
      if('imageUrl' in dd)
      {
        if(dd.imageUrl!==null)
        {
          setPaymentStatus(true);
        }
        else
        {
          setAmount(dd.members.length*50);
        }
      }
      else
      {
        setAmount(dd.members.length*50);
      }
    }catch{(err)=>{
      console.log(err);
    }
    }
    }
  }
  const [rows,setRows]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('rows',JSON.stringify(rows));
  },[rows])
  useEffect(()=>{
    getPaymentStatus();
  },[])
  const callingtodayprofit=(e)=>{
    // e.preventDefault();
    // <Todayprofit rows={rows} createData={createData} setRows={setRows}/>
    window.location='dashboard/today'
  }
  var zz=`Hi , ${xx}`;
  const signout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    console.log(localStorage.getItem('token'));
    window.location='/';
  }
 
  return (
    <div className='topp'>
        <div className="userlead">
            <div className="left">{localStorage.teamName!=='null'?<div><p>{zz}</p><p>{`Team : ${localStorage.teamName}`}</p></div>:<div><p>{zz}</p></div>}</div>
            <div className="rightlogout">
         <div className="dropdown">
  {/* <span>Mouse over me</span> */}
  <i class="fa fa-bars" aria-hidden="true"></i>
  <div class="dropdown-content rightnav">
            {localStorage.teamName!=='null'?
            // <p>{`Team : ${localStorage.teamName}`}</p>
            <p></p>
            :
            <div onClick={()=>{window.location='/teamregister'}} className=' teamregister'>Create Team</div>
            }
            <div onClick={signout} className="logout1">Logout</div>
            <div className="right">Leaderboard</div>
  {/* <p>Hello World!</p> */}
  </div>
  </div>
            
            </div>
        </div>
        
      <div className="topheading">
      
        <span className='head'>Dashboard</span>
      </div>
      <div>
        {
          localStorage.teamName!=='null'?
          !paymentStatus
          ?amount===0?
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader.Puff
            color="#00BFFF"
            height={50}
            width={50}
          /></div>
          :<div onClick={()=>{window.location='/payment'}} className=' payment'>{`Pay Amount: ${amount}`}</div>
          :<div className='payment-success'>Payment Successful! All set for StartIn!!</div>
          :<div></div>
        }
      </div>
      <div className="pic">
        <div className="p1">
            <img src={elipimg1} alt="opsf" />
        </div>
        <div className="p1">
            <img src={elipimg2} alt="opsf" />
        </div>
        <div className="p1">
            <img src={elipimg3} alt="opsf" />
        </div>
      
      </div>
      <div className="todayprofit">
      <span className="today" onClick={callingtodayprofit}>Enter Today's Profit</span>
      </div>

     <div className="lastfive">
        <span className="last">Last Five Entries</span>
      </div>
      <Datatable rows={rows}  className='tablee' />
    </div>
  )
}

export default Dashboard1
