import React from 'react'

import { BiUser, BiCubeAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
function Page() {
  return (
    <div className='page'>
      <h5>PAGES</h5>
      <ul>
        <li className='icons'><span><BiUser /></span>Authentication<span className='R-text'>R</span></li>
        <li className='icons'><span><BiCubeAlt /></span>Utility<span><IoIosArrowDown /></span></li>
      </ul>
    </div>
  )
}

export default Page