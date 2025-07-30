import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId} = useParams()
  return (
    <div className='flex justify-center text-2xl bg-gray-400 p-4'>
      User :{userId}
    </div>
  )
}

export default User
