import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  //run some other code here
  return (
    <div className="pa2 avenir f6 fw6 bg-black-30">
      <Link className="mr2 white" to="/">Home</Link>
      <Link className="mr2 white" to="/about">About</Link>
      <Link className="mr2 white" to="/incrementor">Incrementor</Link>
    </div>
  )
}
