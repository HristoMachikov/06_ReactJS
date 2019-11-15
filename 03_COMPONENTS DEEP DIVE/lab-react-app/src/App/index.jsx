import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from '../header'
import Register from '../Register';
import ProductList from '../product-list';
import ProductCard from '../product-card'
import ProductPage from '../product-page'

import data from "../data";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" exact render={() => <ProductList products={data} />} />
                        <Route path="/shoes" exact render={() => <ProductList products={data} />} />
                        <Route path="/shoes/:id" component={ProductPage} />
                        <Route path="/register" component={Register} />

                    </Switch>
                </Fragment>
            </Router>
        );
    }

};

export default App;