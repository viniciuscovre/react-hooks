import React, { useRef, useEffect, useState } from 'react'

// https://blog.webdevsimplified.com/2020-05/use-ref/

/**
 * The useRef React hook is similar to useState, but it persists the data between renders of your component.
 * A ref does not cause our component to re-update when it gets changed
 */
export default function App() {
  const [name, setName] = useState('')

  const renderCount = useRef(1)
  /**
   * useRef returns an object with a single property 'current': { current: 0 }
   * the 'current' property gets persisted between the different renders
   */

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  /**
   * we can change the '.current' property as many times as we want and it will not cause our component to re-render
   */

  return (
    <>
      <input value={name} onChange={event => setName(event.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  )
}
