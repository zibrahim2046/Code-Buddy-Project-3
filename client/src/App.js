import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
// import NavBar from './components/NavBar'


// import './App.css';

//Pages
import MainPage from './pages/Index';
import NotFound from './pages/404';
import HelpPage from './pages/HelpPage';
import Results from './pages/Results';

import Layout from './layout/Layout';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    {/* <NavBar /> */}
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
            </Provider>    
        );
    }
}
export default App;

// const App = () => { 
//     useEffect(() => {
//         store.dispatch(loadUser());
//     }, []);

//     return (
//         <Provider store={store}>
//             {/* <React.Fragment> */}
//                 {/* <NavBar /> */}
//                 <Layout>
//                     <Router>
//                         <Switch>
//                             <Route exact path='/' component={MainPage} />
//                             <Route exact path='/help' component={HelpPage} />
//                             <Route exact path='/results' component={Results} />
//                             <Route exact path='/404' component={NotFound} />
//                             <Redirect to='/404' />
//                         </Switch>
//                     </Router>
//                 </Layout>
//             {/* </React.Fragment> */}
//         </Provider>    
//     );
// }

// export default App;


