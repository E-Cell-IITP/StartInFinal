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


const Dashboard1 = () => {
  
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
  const [rows,setRows]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('rows',JSON.stringify(rows));
  },[rows])
  const callingtodayprofit=(e)=>{
    // e.preventDefault();
    // <Todayprofit rows={rows} createData={createData} setRows={setRows}/>
    window.location='dashboard/today'
  }

  return (
    <div className='topp'>
        <div className="userlead">
            <span className="left">Hi,UserName</span>
            <span className="right">Leaderboard</span>
        </div>
      <div className="topheading">
        <span className='head'>Dashboard</span>
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
