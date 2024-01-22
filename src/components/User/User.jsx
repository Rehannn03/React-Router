import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <div className='text-center bg-gray-800 text-white p-4'>User : {id}</div>
  )
}

export default User