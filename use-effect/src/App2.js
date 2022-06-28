import React, { useEffect, useState } from 'react'

// https://blog.webdevsimplified.com/2020-04/use-effect/

export default function App() {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  const handleResize = () => setWindowWidth(window.innerWidth)
  
  /**
   * Adds the event listener for resize whenever the app is mounted (onMount)
   * 
   * Because we're adding an event listener, we don't want it to keep listening even after the component is destroyed or unmounted
   * 
   * We want to remove the event listener and for that we add a return function. This function only runs when the component gets unmounted
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <div>{windowWidth}</div>
  )
}
