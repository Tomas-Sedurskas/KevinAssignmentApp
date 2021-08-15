import React, { useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './components/common/navbar/Navbar';
import './styles/baseStyles.css';
import Routing from './components/routing/Routing';

const App: React.FC = () => {

 

  useEffect(() => {
    
   
  }, [])

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="container-desktop">
            <Routing />
        </div>
      </Router>
    </div>
  );
}

export default App;
