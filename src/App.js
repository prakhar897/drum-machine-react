import React, { Component } from 'react';
import './App.css';
import DrumMachine from './DrumMachine';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Helmet>
		    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
		</Helmet>
        <DrumMachine />
      </div>
    );
  }
}

export default App;
