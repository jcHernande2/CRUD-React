import React, { Component } from 'react';
//import logo from '../logo.svg';
class Navigation extends Component{
    render(){
        return(
        <div class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"> React</a>
                <ul class="navbar-nav bd-navbar-nav flex-row">
                    <li class="nav-item">
                        <a class="nav-link active" href="/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Bootstrap');">Home</a>
                    </li>
                </ul>
                <ul class="navbar-nav px-3">
                    
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="#">Salir</a>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}
export default Navigation;