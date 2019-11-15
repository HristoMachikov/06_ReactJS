import React, { Fragment } from 'react'
import {
  Route
} from "react-router-dom";

import PropTypes from 'prop-types'
import ProductCard from '../product-card'

import logged from '../logged'
import './styles.css'


const ProductList = ({ products }) => {

  return (

    <div className="container">
      {renderProducts(products)}
    </div>

  )
}

const renderProducts = (products) => {
  return products.map((product) => {
    return (<Fragment key={product.id}>
      {logged(ProductCard, product)}
    </Fragment>);
    // return (<ProductCard key={product.id} {...product} />)

  })
}


ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
