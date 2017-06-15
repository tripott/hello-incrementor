import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCool: true }
  }

  render() {
    return (
      <div className="white">
        Hi, {this.props.firstName}{' '} Are you cool?{' '}
        {this.state.isCool ? 'yes' : 'no'}
      </div>
    )
  }
}

export default Hello
