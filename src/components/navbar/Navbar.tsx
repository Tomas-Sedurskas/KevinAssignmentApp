import React from 'react'
import './navbar.css';
import logo from '../../assets/kevin-logo.svg';
import galleryIcon from '../../assets/gallery-icon.svg';
import favoriteIcon from '../../assets/favorite-icon.svg';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src={logo} alt="kevin-logo" />
            </div>
            <div className="navbar-button-wrapper">
                <button>
                    <img src={galleryIcon} alt="" />
                </button>
                <button>
                    <img src={favoriteIcon} alt="" />
                </button>
            </div>
        </nav>
    )
}
