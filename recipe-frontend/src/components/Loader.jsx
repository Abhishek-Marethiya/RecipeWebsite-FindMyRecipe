import React from 'react'
import { FiLoader } from "react-icons/fi";
function Loader() {
  return (
    <div className='loader'>
      <div>
      <FiLoader />
      </div>
      <p>Loading....</p>
      </div>
  )
}

export default Loader