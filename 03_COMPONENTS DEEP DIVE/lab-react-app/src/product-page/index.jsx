import React from "react"

import ProductCard from '../product-card'

import data from "../data";

const ProductPage = (props) => {

    const id = props.match.params.id;
    const currData = data.filter(obj => obj.id === id)[0];
 
    return (
        <ProductCard {...currData} />
    )

}

export default ProductPage;