import '../assets/css/App.css'
import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>

        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>

        <hr />
        
        <p>Here is a classic counter for you</p>
        
        <br />

        <Counter />
      </div>
    )
  }
}

export default App
