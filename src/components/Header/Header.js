import React, { Component } from 'react';
// import logo from '../logo.svg';

//may also export on line below: export default class Header extends Component {
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 className="App-title">Welcome to React</h1>
            </header>
        )
    }
}

export default Header; // useful for redux purposes