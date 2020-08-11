import React from "react"
import OrderDisplay from "../orderDisplay/index"




function CartList(props) {




return (

    props.products.map(product=>{

        return <OrderDisplay product={product} />



    })



)





}

export default CartList