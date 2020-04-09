import React, { Component } from 'react';
import './App.css';
// import Content from './content';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       siswa: [
//         {
//           id: 1,
//           nama: 'Adam',
//         },
//         {
//           id: 2,
//           nama: 'Bambang',
//         },
//         {
//           id: 3,
//           nama: 'Charlie',
//         }
//       ]
//     }
//   }

//   render(){
//     return(
//       <div>
//         {
//           this.state.siswa.map((data,key) => 
//           <div>
//             <h3>{data.id}. {data.nama}</h3>
//           </div>
//           )
//         }
//       </div>
//     )
//   }
// }

// State Full
// Jika ingin ada Action Event atau perubahan pada banyak method
class App extends Component{
  constructor(props){
    super(props);
    this.state = {data: '', clcik: ''}  
  }
  handleChange = (event) => {
    this.setState({data: event.target.value});
  }
  handleClick = () => {
    this.setState({clcik: this.state.data});
  }
  render(){
    return(
      <div>
        <label>Masukan Nama =
          <input type="text" onChange={this.handleChange}></input>
        </label>
        <button onClick={this.handleClick}>Submit</button>
        <br/>
        <h3>{this.state.clcik}</h3>
      </div>
    );
  }
}

export default App;
