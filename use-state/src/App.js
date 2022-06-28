import React, { useState } from 'react'

// https://blog.webdevsimplified.com/2020-04/use-state/

const initialState = 0

export default function App() {
  
  const [count, setCount] = useState(initialState)
  
  const changeCount = (amount) => setCount(previousValue => previousValue + amount)
  const resetCount = () => setCount(initialState)
  
  return (
    <>
      <button onClick={() => changeCount(-1)}> - </button>
      <span> {count} </span>
      <button onClick={() => changeCount(1)}> + </button>
      <button onClick={() => resetCount()}> Reset </button>
    </>
  )
}
