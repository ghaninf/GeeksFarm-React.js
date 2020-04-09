import React, { Component } from 'react';
import Avatar from './avatar';
import Username from './username';
import Bio from './bio';

import './style.css'

class Userprofil extends Component{
    constructor(props){
        super(props);
        this.state = {
            nama: this.props.nama,
            umur: this.props.umur,
            gender: this.props.gender,
            username: 'Username'
        };
    }

    setUsername = (e) => {
        e.preventDefault();

        this.setState({username: this.refs.username.value});
        this.refs.formuser.reset();
    }

    render(){
        return(
            <div className='container'>
                <div className='sidebar'>
                    <Avatar />
                    <Username username={this.state.username} />
                    <Bio />
                </div>
                <div>
                    <form ref='formuser'>
                        <label>
                            Masukan Username
                            <input type="text" ref='username'></input>
                            <button onClick={this.setUsername}>Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Userprofil;