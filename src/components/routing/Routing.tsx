import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
  withRouter
} from "react-router-dom";
import { Main } from '../pages/Main';
import { Liked } from '../pages/Liked';
import { ModalPopUp } from '../modal-pop-up/ModalPopUp';
import { Error404 } from '../pages/Error404';
import { useAppSelector } from '../../redux/hooks/hooks';

const Routing = (props: any) => {
    
    const renderModal = useAppSelector((state) => state.navigationSlice.renderModal);
    const previousLocation = useAppSelector((state) => state.navigationSlice.previousLocation);
    const currentLocation = useAppSelector((state) => state.navigationSlice.currentLocation);
    console.log(props)
    return (
        <>
            <Switch location={renderModal ? props.location.state : props.location}>
              <Route exact path="/" component={Main} />
              <Route exact path="/liked" component={Liked} /> 
              <Route exact path="/photo/:id" component={ModalPopUp} />
              <Route path="*" component={Error404} /> 
            </Switch>
            { renderModal 
              ? <Route exact path="/photo/:id" component={ModalPopUp} />
              : null
            }  
        </>
    )
}

export default withRouter(Routing);