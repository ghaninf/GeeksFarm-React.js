import React, { Component } from 'react';
import Greetings from './greetings';
import Userprofile from './userprofile';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      nama: "Ghani Noor Fatah",
      umur: 27,
      gender: "laki-laki"
    }
  }

  render(){
    return(
      <div>
        <Greetings nama={this.state.nama} umur={this.state.umur} gender={this.state.gender}/>
        <div>
          <Userprofile nama={this.state.nama} umur={this.state.umur} gender={this.state.gender}/>
        </div>
      </div>
    );
  }
}

export default App;
