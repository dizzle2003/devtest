import React, { Component } from 'react';
import Axios from 'axios';
import logo from './logo.png';
import design from './design.png';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: null
    }
  }

  componentDidMount(){
    const self = this;
    // Make a request for a user with a given ID
    Axios.get('http://localhost:3001/user')
      .then(function (response) {
        // handle success
        console.log(response);
        self.setState({ test: response.data })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }


  render(){
    console.log(this.state.test)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">White Whale Analytics</h1>
        </header>
        <section>
            <h2>Programming test</h2>
            <p className="App-intro">
              This test will be looking for a few things...
            </p>
            <ul>
              <li>Project layout</li>
              <li>React understanding</li>
              <li>CSS understanding</li>
              <li>Use of flexbox</li>
              <li>Managing time</li>
              <li>Googling skills</li>
            </ul>
            <h3>Task</h3>
            <p>Create a reddit card list that pulls a post from a backend service.</p>
            <img src={design} alt="design" />

        </section>
      </div>
    );
  }
}

export default App;
