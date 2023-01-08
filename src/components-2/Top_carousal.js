import React from 'react'
import Carousal from '../components/carousel'
import Division3 from './Division3'
import Tophead1 from './TopHead1'
import { Termcondition } from './termcondition'

const Top_carousal = () => {
  return (
    <div>
      <Tophead1/>
      <Carousal/>
      <Division3/>
      <Termcondition/>
    </div>
  )
}

export default Top_carousal
