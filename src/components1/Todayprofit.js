import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import './todayprofit.css'
import Datatable from './Datatable';
import Dashboard1 from './Dashboard1';
import HeadDashboard1 from './HeadDashboard1';


const Todayprofit = ({rows,createData,setRows}) => {
    
    const [personname,setPersonname]=useState("");
    const [profitamount,setProfitamount]=useState("");
    const [date,setDate]=useState("");
    const [remarks,setRemarks]=useState("");
    var currentdate = new Date(); 
    var datetime = 
                 currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
      
    const changhandle=(e)=>{
        e.preventDefault();
        // setRows([createData(rows.length+1,profitamount,date,datetime,personname),...rows]);
        // setPersonname('');
        // setDate('');
        // setProfitamount('');
        // setRemarks('');
        window.location='/dashboard'
    }
  return (
    <>
    <HeadDashboard1/>
    <div className='formtodayprofit'>
    <form onSubmit={changhandle}   className='todaycont'>

   
      <div className="uskaname comm">
         <span className="namee">Name</span>
            <input  className='namebox boxx' autoComplete='off' value={personname} onChange={(e)=>{setPersonname(e.target.value)}} id="personname" type="text" placeholder='Enter your Name' required />
      </div>
      <div className="uskaamount comm">
         <span className="namee">Profit Amount</span>
            <input  className='namebox boxx' autoComplete='off' value={profitamount} onChange={(e)=>{setProfitamount(e.target.value)}} id="profitamount" type="text" placeholder='Enter Profit Amount'  required/>
      </div>
      <div className="uskaDate comm">
         <span className="namee">Date</span>
         <input className='boxx namebox' autoComplete='off' value={date} onChange={(e)=>{setDate(e.target.value)}} id="date" type="date"  required
      />

      </div>
      <div className="uskaRemarks comm">
      <label className='namee' for="w3review">Remarks</label>
<textarea value={remarks} onChange={(e)=>{setRemarks(e.target.value)}} className='boxx namebox' id="w3review" name="w3review" rows="7" cols="70" placeholder='Optional'>

 </textarea>
      </div>
      <div className="submitting ">
        <button  className="submitnow">Submit</button>
      </div>
    </form>
      
    </div>
    </>
  )
}

export default Todayprofit
