import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductList from './product-list'
import Button from './Button'
import data from './data'



// ReactDOM.render(<ProductList products={data} />, document.getElementById('root'))
ReactDOM.render(
    <Fragment><Button /><Button /><Button /></Fragment>
    , document.getElementById('root'))
