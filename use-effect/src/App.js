import React, { useEffect, useState } from 'react'

// https://blog.webdevsimplified.com/2020-04/use-effect/

export default function App() {
  
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  
  /**
   * We are watching for any change in the empty array (options array set to [])
   * So this useEffect will only be executed when the page is mounted.
   */
  useEffect(() => {
    console.log('onMount')
  }, [])
  
  /**
   * A side effect happens whenever resourceType changes.
   * 
   * The return function is the clean up function
   *   => It gets executed to clean up whatever we did last time
   *   => It runs before running the actual set up code
   *   => It's also executed every time the component gets unmounted
   */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    return () => console.log('return from resource change')
  }, [resourceType])
  
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}
