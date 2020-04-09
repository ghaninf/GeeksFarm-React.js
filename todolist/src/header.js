import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component{
    render(){
        let indoesia = require('moment/locale/id');
        Moment.updateLocale('id', indoesia);
        return(
            <div>
                <h3>To Do List</h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
        )
    }
}

export default Header;