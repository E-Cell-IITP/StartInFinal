import React from 'react'
import "./division3.css"
import rec1 from '../images/Rectangle\ 1.jpg'
import Tophead1 from './TopHead1'

const Food1 = () => {
  return (
    <>
    <Tophead1/>
    <div className='main-boxo'>
      <div className='board'>Food and Bevarages</div>
      <div className='table'>
        <img src={rec1} alt="" />
      </div>
    </div>
    </>
  )
}

export default Food1
