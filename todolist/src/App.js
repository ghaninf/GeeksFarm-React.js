import React, { Component } from 'react';
import Header from './header';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {todos: []};
  }
  addToDo = (e) =>{
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({jam, aktivitas}); // Memasukan value jam dan aktivitas ke array todos
    this.setState({todos: this.state.todos}); // Update Data

    this.refs.formulir.reset(); // Menghapus value pada Form formulir
    this.refs.jam.focus(); // Mengarahkan kursor ke ref jam
  }

  removeToDo = (i) => {
    this.state.todos.splice(i,1); // Splice adalah menghapus data array pada index i
    this.setState({todos: this.state.todos}); // Update Data
  }

  render(){
    return(
      <div>
        <Header />
        <form ref="formulir" className="form-inline">
          <input type="text" ref="jam" placeholder="Waktu Aktivitas" className="form-control"/>
          <input type="text" ref="aktivitas" placeholder="Judul Aktivitas" className="form-control" />
          <button onClick={this.addToDo} className="btn btn-info">Simpan</button>
        </form>
        <br />
        <div>
          <ul>
            {this.state.todos.map((data, i) =>
              <li key={i}>
                <div>
                  <button onClick={()=>this.removeToDo(i)} className="btn btn-outline-danger">Hapus</button> {data.jam} : {data.aktivitas}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
