import React, { Component } from 'react'

import LinearLoader from 'react-linear-loader'

export default class App extends Component {
  render () {
    return (
      <div>
        <LinearLoader />
        <h1>Well this is the demo....</h1>
        <img src="https://i.imgflip.com/2rjx1w.jpg" alt=""/>
      </div>
    )
  }
}
