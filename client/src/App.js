import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

//Pages
import MainPage from './pages/Index';
import NotFound from './pages/404';
import HelpPage from './pages/HelpPage';
import Results from './pages/Results';
import SavedPage from './pages/Saved';

import Layout from './layout/Layout';



class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={MainPage} />
                            <Route exact path='/help' component={HelpPage} />
                            <Route exact path='/results' component={Results} />
                            <Route exact path='/saved' component={SavedPage} />
                            <Route exact path='/404' component={NotFound} />
                            <Redirect to='/404' />
                        </Switch>
                    </Router>
                </Layout>
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
