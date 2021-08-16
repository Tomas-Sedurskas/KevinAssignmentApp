import React from 'react'
import {
  Switch,
  Route,
  withRouter,
  useLocation
} from "react-router-dom";
import { Main } from '../pages/Main';
import { Liked } from '../pages/Liked';
import { ModalPopUp } from '../modal-pop-up/ModalPopUp';
import { Error404 } from '../pages/Error404';
import { useAppSelector } from '../../redux/hooks/hooks';

const Routing: React.FC= (props: any) => {
    let params: any = useLocation().pathname;
    const renderModal = useAppSelector((state) => state.navigationSlice.renderModal);
    
    const trueProps = () => {
      console.log(params)
      let initParams = "/"
      if(params === '/liked'){initParams = '/liked'}

      var initialState = {hash: "", pathname: initParams, search: "", state: {pathname: params}}
      if(props.location.state === undefined){
        console.log('INIT')
        props.location.state = initialState
      }
      return props.location.state
    }
    return (
        <>
            <Switch location={renderModal ? trueProps() : props.location.state}>
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