import React, { Component } from 'react';
import './App.css';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {data: ''}
    }

    render(){
        return(
            <div>
                <p>Nama Saya {this.props.data}</p>
            </div>
        );
    }
}
// class Content extends Component{
//     constructor(props){
//         super(props);
//         this.state = {salam: ''};
//     }

//     salamkan = () => {
//         this.setState({salam: "Salam Untukmu"});
//     }
//     render(){
//         return(
//             <div className="content">
//                 {/* Memanggil property state.salam */}
//                 {this.state.salam}  
//                 <p>Hello {this.props.namaDepan} {this.props.namaBelakang}</p>
//                 <button onClick={this.salamkan}>Salam</button>
//             </div>
//         )
//     }
// }

export default Content;