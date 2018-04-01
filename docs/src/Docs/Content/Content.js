import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
  render () {
    return (
      <div className='Content'>
        <ul>
          <li><a href='https://reactjs.org/docs/dom-elements.html'>DOM Elements</a></li>
          <li><a href='https://reactjs.org/docs/events.html'>Events</a></li>
          <li><a href='https://reactjs.org/docs/lists-and-keys.html'>Lists and Keys</a></li>
        </ul>
      </div>
    )
  }
}

export default Content
