import React, { useRef, useEffect, useState } from 'react'

/**
 * useRef is mostly used to reference another HTML element
 */
export default function App() {
  const [name, setName] = useState('')

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  })

  function focus() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={event => setName(event.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}
