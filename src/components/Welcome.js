import React from 'react'
const Welcome = (props)=>{
  return(
    <div>
    <h1>Hey !{props.name}</h1>
    <h2>{props.text}</h2>
    </div>
  )
}
export default Welcome
