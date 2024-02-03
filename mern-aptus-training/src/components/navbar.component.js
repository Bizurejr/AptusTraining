//These allow use to link to different components
import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    //this is pretty similary to html, bootstrap
    render(){
        return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar -brand"> AptusTraining </Link>
            <div className="collpase navbar-collapse">
                <ul className ="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className ="nav-link">Exercises</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/create" className="nav-link"> Create Exercise Log</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="user" className="nav-link"> Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}