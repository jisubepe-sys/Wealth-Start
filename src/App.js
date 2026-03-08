import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Payment from './payment/Payment';
import AdminPanel from './admin/AdminPanel';
import History from './history/History';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/payment' component={Payment} />
                <Route path='/admin' component={AdminPanel} />
                <Route path='/history' component={History} />
            </Switch>
        </Router>
    );
};

export default App;
