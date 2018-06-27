// ---------- This file holds all of the browser routes for the app ----------

import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../routes/Main'
import Admin from '../routes/Admin'
import AdminOld from '../routes/Admin-old'


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component ={Main} />
            <Route path='/main' exact component ={Main} />
            <Route path='/admin' exact component ={Admin} />
            <Route path='/admin-old' exact component ={AdminOld} />

        </Switch>
    </BrowserRouter>
)