import React, { useState} from 'react'
import './Leaderboard.css'
import Laederboard_table from './Laederboard_table'
import Homeloginregister from './homeloginregister'


const Leaderboard = () => {
  const list = [
    { id: 1, TeamName: 'Snow', Category: 'Jon', TotalProfit: 35 },
    { id: 2, TeamName: 'Lannister', Category: 'Cersei', TotalProfit: 42 },
    { id: 3, TeamName: 'Lannister', Category: 'Jaime', TotalProfit: 45 },
    { id: 4, TeamName: 'Stark', Category: 'Arya', TotalProfit: 16 },
    { id: 5, TeamName: 'Targaryen', Category: 'Daenerys', TotalProfit: 5000 },
    { id: 6, TeamName: 'Melisandre', Category: 'pradeep', TotalProfit: 15000 },
    { id: 7, TeamName: 'Clifford', Category: 'Ferrara', TotalProfit: 44 },
    { id: 8, TeamName: 'Frances', Category: 'Rossini', TotalProfit: 36 },
    { id: 9, TeamName: 'Roxie', Category: 'Harvey', TotalProfit: 65 },
]
  
  list.sort((a, b) => (a.TotalProfit > b.TotalProfit) ? -1 : 1)
  
  console.log(list)

  const [Rows, SetRows] = useState(list)

  return (
    <div className='main' >
      {/* <div className='menubar'>
        <div onClick={()=>{window.location='/'}} className='btn_home'>Home</div>
        <div className="rightnav1">
        <div onClick={()=>{window.location='/login'}} className='loginregister'>Login</div>
        <div onClick={()=>{window.location='/personal_register'}} className='loginregister'>Register</div>
        </div>
      </div> */}
      
      <div className='board'>Leaderboard</div>
      <Laederboard_table rows={list}/>
    </div>
  )
}

export default Leaderboard