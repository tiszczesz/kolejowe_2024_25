import React from 'react'

type Props = {}

const ManualTimer = (props: Props) => {
  return (
    <>
    <button>Podaj datę: {currentDate}</button><br />
    <button>Podaj czas: {currentTime}</button><br />
    </>
  )
}

export default ManualTimer