import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Main } from './components/pages/Main';
import { Liked } from './components/pages/Liked';
import { ModalPopUp } from './components/modal-pop-up/ModalPopUp';
import { Error404 } from './components/pages/Error404';
import { Navbar } from './components/common/navbar/Navbar';
import './styles/baseStyles.css';
import { useAppSelector } from './redux/hooks/hooks';
import { RouteProps } from "react-router-dom";

const App: React.FC = () => {

  const renderModal = useAppSelector((state) => state.navigationSlice.renderModal);
  const previousLocation = useAppSelector((state) => state.navigationSlice.previousLocation);

  //const currentLocation: string = useParams();
  

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="container-desktop">
            
            <Switch location={previousLocation}>
              <Route exact path="/" component={Main} />
              <Route exact path="/liked" component={Liked} /> 
              <Route exact path="/photo/:id" component={ModalPopUp} />
              <Route path="*" component={Error404} /> 
            </Switch>
            { renderModal 
              ? <Route exact path="/photo/:id" component={ModalPopUp} />
              : null
            }
            
            
        </div>
      </Router>
    </div>
  );
}

export default App;
