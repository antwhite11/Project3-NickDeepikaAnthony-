import React, { useState } from "react"
import Card from "../../components/Card";

function ProductList(props){
    // renderProducts = () => {
    //   return products.map(product => {
    //     return <Card product={product} />
    //      })
    //  }

    return(
        props.products.map(product => {
            return <Card product={product} />
             })
       
    )

}


export default ProductList;