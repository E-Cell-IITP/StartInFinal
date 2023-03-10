import { SettingsInputAntennaTwoTone } from '@mui/icons-material'
import React, { useState , useEffect} from 'react'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './register.css'
// import AddMember from './AddMember'
// import fetchFoByDis from './Asyncc';

const Register = () => {
  const [membercount, setmembercount] = useState([{id: 0,name:null},{id: 1,name:null},{id: 2,name:null}])
//   const tempmem1={
//       id: 0,
//       name:null
//   }
//   // const [member, setmember] = useState([])
//   setmembercount([...membercount,tempmem1])
//   const tempmem2={
//     id: 1,
//     name:null
// }
// setmembercount([...membercount,tempmem2])
// const tempmem3={
//   id: 1,
//   name:null
// 
// setmembercount([...membercount,tempmem3])



  const [description,setdescription] = useState("")
  const [teamname,setteamname] = useState("")
  const [ct,setct]=useState(3)
  const deleteitem=(itemId)=> {
    console.log(itemId)
    setct(ct-1);
    setmembercount((current) =>
    current.filter((membercount) =>  membercount.id!== itemId)
  );}
  const deletemember=(id)=>{

  }
   async function funcc(){
    const temp = []

    membercount.map((elm)=>{
      temp.push(elm.name)
    })
    console.log(temp)
    let item={teamName: teamname,description: description, members: temp};
    const body = JSON.stringify(item);
    let result=await fetch("http://localhost:4000/users/team-register",
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
  const addmember=(e, id)=>{
    const temp = [...membercount];
    temp.map(elm => {
      if(elm.id == id)
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
                <label htmlFor="">username</label>
                <form className='container'>
                <input onChange={(e)=>addmember(e.target.value, elm.id)} type="text" placeholder={x}/>
                <i className="far fa-trash-alt add-btn btn-delete" onClick={()=>{
                        deleteitem(elm.id);
                        deletemember()
                    }}></i>
                </form>
            </div>
              )
            })
          }
            <div className='btn-add' onClick={()=>{
              if(ct<7){
                // const new_mem = {
                //   number:ct-3
                // }
                setmembercount([...membercount,{id: ct, name: null}])
                setct(ct+1)
              }          
            }}>Add Member</div>
            <div className='description'>
              <label htmlFor="">Description</label>
              <textarea value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='give description about your shop'></textarea>
            </div>
          <div   className="submitbutton" onClick={funcc}>
            Register
          </div>
      </div>
    </div>
  )
}

export default Register
