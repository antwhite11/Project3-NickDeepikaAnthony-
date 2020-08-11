import React, {useState} from "react"
import OrderDisplay from "../../components/orderDisplay/index"
import CheckoutButton from "../../components/CheckoutButton"
import TotalCard from "../../components/TotalCard/index"
import ShippingCard from "../../components/ShippingCard/index"
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM } from "../../utils/actions";
import CartList from "../../components/CartList"

import { Link } from "react-router-dom"


const checkOutpage = () => {

    const[state,dispatch]= useStoreContext();
    

   



    var headerStyle = {
        textAlign:"center",
        fontSize: "55px",
        marginTop:"175px"
        }
    

 

    return (
  
    <div>
    <header style={headerStyle}>Checkout!</header>
    {console.log("here")}
    {console.log(state.cartProducts)}
    {console.log("cart")}
    <CartList products={state.cartProducts} />
    <ShippingCard></ShippingCard>

    <TotalCard></TotalCard>
    <Link to="/orderSubmitted"><CheckoutButton></CheckoutButton></Link>
    
    
    
    </div>
   
    

    )




}

export default checkOutpage