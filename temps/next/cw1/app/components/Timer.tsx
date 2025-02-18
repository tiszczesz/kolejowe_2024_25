"use client"
import React, { useState } from 'react'

type Props = {}

const Timer = (props: Props) => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <span style={{display:"inline-block",margin:"10px"}}>{count}</span> 
        <button
        className='bg-yellow-300 p-1 w-20 rounded hover:bg-blue-200'
         value="Zmień" onClick={()=>setCount(count=>count+1)}>Zmień</button>
    </div>
  )
}

export default Timer