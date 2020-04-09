import React, { Component } from 'react';
import './style.css';

class Greetings extends Component{
    render(){
        return(
            <div>
                <h1>Selamat Datang </h1>
                <div className='container'>
                    <p>
                        {this.props.nama}<br />
                        {this.props.umur}<br />
                        {this.props.gender}<br />
                    </p>
                </div>
            </div>
        )
    }
}

export default Greetings;