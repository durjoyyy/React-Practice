import React, { useState } from 'react'
import UserContext from './UserContext'



const UserContextProvider=({children})=>{
  const [userDetails,setUserDetails] = React.useState(null);
  const value={userDetails, setUserDetails}

  return (
    <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>
  )
}


export default UserContextProvider;