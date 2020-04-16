import React, { Component } from 'react';
import './navBar.css';
import Logo from '../../assets/Images/Hideout_Logo_noEST.png';


export default class NavBar extends Component {
    render() {
        return (
            <div className='navBarComponent'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <img className='navbarLogo' src={Logo}/>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Server Info</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Features</a>
                                    <a href="#" className="dropdown-item">Server Rules</a>
                                    <a href="#" className="dropdown-item">Mod List</a>
                                    <a href="#" className="dropdown-item">Our Staff</a>
                                </div>
                            </div>
                            <a href="#" className="nav-item nav-link">Trader</a>
                            <a href="#" className="nav-item nav-link">Donations</a>
                            <a href="https://discordapp.com/invite/thehideout" className="nav-item nav-link" target='_blank'>Join Our Discord</a>
                        </div>
                    </div>
                </nav>
                    
            </div>

        )
    }
}
