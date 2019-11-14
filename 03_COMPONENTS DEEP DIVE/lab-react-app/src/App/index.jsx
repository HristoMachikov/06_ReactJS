import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from '../header'
import Register from '../Register';
import ProductList from '../product-list';

import data from "../data";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <ProductList products={data} />
                        </Route>
                        <Route path="/register" component={Register} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }

};

export default App;