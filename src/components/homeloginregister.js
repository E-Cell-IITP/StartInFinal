import React from 'react'

const Homeloginregister = () => {
  return (
    
    <div>
       <div style={{marginTop:'25px'}} className='_menubar'>
        <div onClick={()=>{window.location='/'}} className='btn_home'>Home</div>
        {/* <div className='btn_leaderboard'>Leaderboard</div> */}
        <div className="rightnav1">
        {/* <div onClick={()=>{window.location='/teamregister'}} className='_btn_leaderboard'>Team Registration</div> */}
        <div onClick={()=>{window.location='/login'}} className='loginregister'>Login</div>
        <div onClick={()=>{window.location='/personal_register'}} className='loginregister'>Register</div>
        </div>
      </div>
    </div>
  )
}

export default Homeloginregister
