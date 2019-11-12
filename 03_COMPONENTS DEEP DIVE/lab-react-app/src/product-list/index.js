import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import './styles.css'



const renderProducts = (products) => {
  return products.map((product) => {
    return (<Fragment key={product.id}>
      {logged(ProductCard, product)}
    </Fragment>);
    // return (<ProductCard key={product.id} {...product} />)
  })
}

const ProductList = ({ products }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {renderProducts(products)}
      </div>
    </Fragment>
  )
}

ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
