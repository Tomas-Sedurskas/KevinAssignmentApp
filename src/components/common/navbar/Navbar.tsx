import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src="/assets/kevin-logo.svg" alt="kevin-logo" />
            </div>
            <div className="navbar-button-wrapper">
                <button>
                    <Link to="/">
                        <img src="/assets/gallery-icon.svg" alt="" />
                    </Link>
                </button>
                <button>
                    <Link to="/liked">
                        <img src="/assets/like-icon.svg" alt="" />
                    </Link>
                </button>
            </div>
        </nav>
    )
}
