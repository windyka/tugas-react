import React, { Component } from 'react';
import './App.css';
import Homes from './component/Home'
import './component/Home.css'
import Details from './component/Detail';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Homes />
        {/* <Details /> */}
      </div>
    );
  }
}

export default App;
