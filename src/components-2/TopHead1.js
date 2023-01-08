import React from 'react'
import './tophead1.css'


const Tophead1 = () => {
  return (
    <div className='_main outside1' >
      <div className='_menubar'>
        <div onClick={()=>{window.location='/'}} className='_btn_home'>Start In</div>
        <div className="rightnav">
        <div onClick={()=>{window.location='/outsideleaderboard'}} className='_btn_leaderboard'>Leaderboard</div>
        {/* <div onClick={()=>{window.location='/teamregister'}} className='_btn_leaderboard'>Team Registration</div> */}
        <div onClick={()=>{window.location='/login'}} className='_btn_leaderboard'>Login</div>
        <div onClick={()=>{window.location='/personal_register'}} className='_btn_leaderboard'>Register</div>
        </div>
      </div>
      {/* <div className='table'>jjfjf</div> */}
    </div>
  )
}

export default Tophead1