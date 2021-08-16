import React from 'react'
import './navbar.css';
import { Link, withRouter, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    let local = useLocation().pathname
    
    const checkLocation = (path: string) => {
        if(path === local){
            return "navbar-button-active"
        } 
        console.log(local)
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src="/assets/kevin-logo.svg" alt="kevin-logo" />
            </div>
            <div className="navbar-button-wrapper">
                <button className={checkLocation('/')}>
                    <Link to={{pathname: '/', state:{ pathname: '/' }}}>
                        <img src="/assets/gallery-icon.svg" alt="" />
                    </Link>
                </button>
                <button className={checkLocation('/liked')}> 
                    <Link to={{pathname: '/liked', state:{ pathname: '/liked' }}}>
                        <img src="/assets/like-icon.svg" alt="" />
                    </Link> 
                </button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);