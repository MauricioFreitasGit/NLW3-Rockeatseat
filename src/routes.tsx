import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanegesMap';

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/app" component={OrphanagesMap}></Route>
        </BrowserRouter>
    )
}

export default Routes;