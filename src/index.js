import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './pages/NotFoundPage';
import * as serviceWorker from './utils/serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import PacientePage from './pages/Paciente/PacientePage';

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={HomePage} />
            <Route path='/dashboard' exact={true} component={DashboardPage} />
            <Route path='/pacientes' exact={true} component={PacientePage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
