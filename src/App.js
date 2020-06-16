import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';

//Pages
import MainPage from './pages';
import NotFound from './pages/404';
import HelpPage from './pages/helpPage';
import LoadingPage from './pages/loadingPage';
import Results from './pages/results';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/help' component={HelpPage} />
                    <Route exact path='/load' component={LoadingPage} />
                    <Route exact path='/results' component={Results} />
                    <Route exact path='/404' component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </Router>
        );
    }
}
export default App;
