import React from 'react'
import './navbar.css';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { setLocation } from '../../../redux/slices/navigationSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';


interface Props {
    location: {
        pathname: string
    }
}


const Navbar: React.FC = ({location}: any) => {
    const dispatch = useAppDispatch();
    const currentLocation = useAppSelector((state) => state.navigationSlice.currentLocation)
    const history = useHistory();
    
 
    /*
    const handleRouting = (pathname: string) => {
        console.log('Handling routes')
        let payload = {
            currentLocation: pathname,
            previousLocation: currentLocation.pathname
        }
        dispatch(setLocation(payload))
        history.push(pathname);
    }
    */
   
    return (
        <nav className="navbar">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src="/assets/kevin-logo.svg" alt="kevin-logo" />
            </div>
            <div className="navbar-button-wrapper">
                <button >
                    <Link to={{pathname: '/', state:{ pathname: location.pathname }}}>
                        <img src="/assets/gallery-icon.svg" alt="" />
                    </Link>
                        
                  
                </button>
                <button> 
                    <Link to={{pathname: '/liked', state:{ pathname: location.pathname }}}>
                        <img src="/assets/like-icon.svg" alt="" />
                    </Link>
                        
                        
                    
                </button>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);