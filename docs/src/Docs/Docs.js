import React, { Component } from 'react'
import './Docs.css'
import Content from './Content/Content'

class Docs extends Component {
  render () {
    return (
      <div className="Docs">
        <h1>React 16 Notes</h1>

        <Content />

        <h2>Async Rendering Gradual Migration Path</h2>
        <ul>
          <li>
            16.3: Introduce aliases for the unsafe lifecycles,
            UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, and
            UNSAFE_componentWillUpdate. (Both the old lifecycle names and the new
            aliases will work in this release.)
          </li>
          <li>
            A future 16.x release: Enable
            deprecation warning for componentWillMount, componentWillReceiveProps,
            and componentWillUpdate. (Both the old lifecycle names and the new
            aliases will work in this release, but the old names will log a DEV-mode
            warning.)
          </li>
          <li>
            17.0: Remove componentWillMount, componentWillReceiveProps,
            and componentWillUpdate . (Only the new “UNSAFE_” lifecycle names will
            work from this point forward.)
          </li>
        </ul>
      </div>
    )
  }
}

export default Docs
