import React, {useState} from "react"
import OrderDisplay from "../../components/orderDisplay/index"
import CheckoutButton from "../../components/CheckoutButton"
import TotalCard from "../../components/TotalCard/index"
import ShippingCard from "../../components/ShippingCard/index"
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM } from "../../utils/actions";


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
    {console.log(state.cartProducts[1])}
    {console.log("cart")}
    <OrderDisplay products={state.cartProducts[1]} />
    <ShippingCard></ShippingCard>

    <TotalCard></TotalCard>
    <CheckoutButton></CheckoutButton>
    
    
    
    </div>
   
    

    )




}

export default checkOutpage