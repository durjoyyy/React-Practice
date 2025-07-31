import React, { use, useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  // const [data,setData]=useState([])

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary').
  //   then(res=>res.json()).
  //   then(data=>{
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])
  const data=useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      Github Followers: {data?.followers}
    </div>
  )
}

export default Github


export const gitInfoLoader = async()=>{
    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json();
}