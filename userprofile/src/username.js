import React, { Component } from 'react';

class Username extends Component{
    render(){
        return(
            <div>
                <p>Username : {this.props.username}</p>
            </div>
        );
    }
}

export default Username;