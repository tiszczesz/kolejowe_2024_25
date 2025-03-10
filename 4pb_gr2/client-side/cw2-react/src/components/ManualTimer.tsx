import React, { useState } from 'react'

// type Props = {}

const ManualTimer = () => {
    const [currentDate, setCurrentDate] = useState<string>(new Date().toLocaleDateString())
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString())
  return (
    <>
    <button onClick={()=>setCurrentDate(new Date().toLocaleDateString())}>Podaj datę: {currentDate}</button><br />
    <button onClick={()=>setCurrentTime(new Date().toLocaleTimeString())}>Podaj czas: {currentTime}</button><br />
    </>
  )
}

export default ManualTimer