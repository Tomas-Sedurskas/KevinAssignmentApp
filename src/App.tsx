import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Main } from './pages/main/Main';
import { Liked } from './pages/liked/Liked';
import { Error404 } from './pages/error404/Error404';
import { Navbar } from './components/navbar/Navbar';
import './styles/baseStyles.css';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="container-desktop">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/liked" exact>
              <Liked />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
