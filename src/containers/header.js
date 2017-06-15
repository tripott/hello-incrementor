import React from 'react'
import { Link } from 'react-router-dom'
import Hello from './hello'

export default props => {
  return (
    <div className="pa2 bg-black-70">
      <Link className="f2 fw2 avenir light-green link ml1" to="/">
        Super App!
      </Link>
      <Hello firstName="Trip" />
    </div>
  )
}
