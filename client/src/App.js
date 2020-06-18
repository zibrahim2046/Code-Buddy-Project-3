import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';

//Pages
import MainPage from './pages/Index';
import NotFound from './pages/404';
import HelpPage from './pages/HelpPage';
import Results from './pages/Results';

import Layout from './layout/Layout';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={MainPage} />
                            <Route exact path='/help' component={HelpPage} />
                            <Route exact path='/results' component={Results} />
                            <Route exact path='/404' component={NotFound} />
                            <Redirect to='/404' />
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}
export default App;
