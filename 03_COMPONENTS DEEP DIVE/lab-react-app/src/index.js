import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProductList from './product-list'
import Button from './Button'
import data from './data'
import Register from './Register'

ReactDOM.render(<Register />, document.getElementById('root'))
// ReactDOM.render(<ProductList products={data} />, document.getElementById('root'))
// ReactDOM.render(
//     <Fragment><Button dataId="1" /><Button dataId="2"/><Button dataId="3"/></Fragment>
//     , document.getElementById('root'))