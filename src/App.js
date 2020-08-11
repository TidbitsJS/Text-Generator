import React, { Component } from 'react'
import './App.css'
import FetchData from 'components/FetchData'

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center">React JS Sample Text Generator</h1>
        <FetchData />
      </div>
    )
  }
}


export default App
