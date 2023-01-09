import { SettingsInputAntennaTwoTone } from '@mui/icons-material'
import React, { useState , useEffect} from 'react'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './register.css'
// import AddMember from './AddMember'
// import fetchFoByDis from './Asyncc';
import axios from 'axios';
import * as Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [membercount, setmembercount] = useState([{id: 1,name:null},{id: 2,name:null},{id: 3,name:null},{id: 4,name:null}])
  const [description,setdescription] = useState("")
  const [teamname,setteamname] = useState("")
  const [ct,setct]=useState(4)
  const [toggle,settoggle] = useState(true)
  const deleteitem=(itemId)=> {
    console.log(itemId)
    setct(ct-1);
    setmembercount((current) =>
    current.filter((membercount) =>  membercount.id!== itemId)
  );}
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
    const temp = []

    membercount.map((elm)=>{
      temp.push(elm.name)
    })
    console.log(temp)
    if(teamname!==""&&description!==""&& temp.length>=4){
      settoggle(false)
    let item={teamName: teamname,description: description, members: temp};
    // const body = JSON.stringify(item);
    let result = {};
    try{
      result=await axios.post("https://ecell-startin-backend.onrender.com/users/team-register",
     item,{
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }}
    )
    // result=await result.json();
    var x=result.data.message;
    showToastMessage(x)
    settoggle(true)
    console.log(result);
    setTimeout(()=>{window.location='/dashboard'},1500)
  }catch(err){
    var g=err.response.data.message;
    showToastMessage1(g)
    console.log(err);
    settoggle(true)
  }
}
  else{
    showToastMessage1("Please fill all the field");
    settoggle(true)
  }
}
  const addmember=(e, id)=>{
    const temp = [...membercount];
    temp.map(elm => {
      if(elm.id === id)
      {
        elm.name = e;
      }
    })
    setmembercount([...temp]);
    // const new_mem = {
    //   userid: e
    // }
    // setmember(...member,new_mem)
  }
  return (
    <div className='loginhead'>
      <div className='navcontain1'>
       <div className="top1">
        <span onClick={()=>{window.location='/'}} className="headingis s1">Start-In</span>
       </div>
      </div>
      {toggle?
      <div className="teamnamebox1">
      <div className="loginbox">
            <div className="headinglogin"> Team Register</div>
            <div className="firstname">
                <label htmlFor="">Team Name</label>
                <input value={teamname} onChange={(e)=>setteamname(e.target.value)} type="text" placeholder='Enter your Team name'/>
            </div>
            {/* <div className="lastname">
                <label htmlFor="">username</label>
                <input  onChange={(e)=>addmember(e.target.value, 0)} type="text" placeholder={`member 1`}/>
            </div>
            <div className="lastname">
                <label htmlFor="">username</label>
                <input onChange={(e)=>addmember(e.target.value, 1)} type="text" placeholder={`member 2`}/>
            </div>
            <div className="lastname">
                <label htmlFor="">username</label>
                <input onChange={(e)=>addmember(e.target.value, 2)} type="text" placeholder={`member 3`}/>
            </div> */}
            {
            membercount.map((elm) =>{
              {/* console.log(elm.id) */}
              let y = elm.id;
              let x = `member ${y}`;
              return(
                <div className="lastname">
                <label htmlFor="">UserName</label>
                <div className='container'>
                <input onChange={(e)=>addmember(e.target.value, elm.id)} type="text" placeholder="member's userId"/>
                <i className="far fa-trash-alt add-btn btn-delete" onClick={()=>{
                        deleteitem(elm.id);
                        // deletemember()
                    }}></i>
                </div>
            </div>
              )
            })
          }
            <div className='btn-add' onClick={()=>{
              if(ct<6){
                // const new_mem = {
                //   number:ct-3
                // }
                setmembercount([...membercount,{id: ct+1, name: null}])
                setct(ct+1)
              }          
            }}>Add Member</div>
            <div className='description'>
              <label htmlFor="">Description</label>
              <textarea value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='give description about your shop'></textarea>
            </div>
          <div   className="submitbutton" onClick={funcc}>
            Register Team
          </div>
          <ToastContainer/>
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

export default Register
