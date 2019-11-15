import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

import PropTypes from 'prop-types'
import ProductPrice from '../product-price'
import './styles.css'

class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      clicks: 0
    }

    this.interval = null
  }

  handleMouseOver = () => {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000);
  }

  handleMouseOut = () => {
    clearInterval(this.interval)
  }

  handleMouseClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  hаndleResetClicks = (event) => {
    event.stopPropagation();
    this.setState({
      clicks: 0
    })
  }

  render() {
    console.log("render")
    const { image, title, brand, price, id } = this.props

    return (

      <div className="product-tile" onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
        <img className="product-image" src={image} alt={title} />
        <div>
          <span className="product-brand">{brand}</span>
          <span className="product-title">{title}</span>
          <ProductPrice price={price} />
          <span className="product-seconds">Seconds Counter: {this.state.counter}</span>
          <span className="product-clicked" onClick={this.handleMouseClick}>Clicked: {this.state.clicks} times!</span>
          <span className="product-clicked"><button onClick={this.hаndleResetClicks}>Reset</button></span>
          <div>
            <Link className="btn-link" to={`/shoes/${id}`}>Details</Link>
            <Link className="btn-link" to={`/shoes`}>Back</Link>
          </div>
        </div>
      </div>

    )
  }
  componentDidMount() {
    
    console.log("Mount")
  }
  componentDidUpdate() {
    console.log("Update")
  }
}


ProductCard.defaultProps = {
  image: '',
  title: 'Placeholder',
  brand: '',
  price: 0
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired
}

export default ProductCard