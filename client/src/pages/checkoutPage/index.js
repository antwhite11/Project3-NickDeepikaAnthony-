import React from "react"
import OrderDisplay from "../../components/orderDisplay/index"
import CheckoutButton from "../../components/CheckoutButton"
import TotalCard from "../../components/TotalCard/index"
import ShippingCard from "../../components/ShippingCard/index"

const checkOutpage = () => {

    var headerStyle = {
        textAlign:"center",
        fontSize: "55px",
        marginTop:"175px"
        }
    

 

    return (
  
    <div>
    <header style={headerStyle}>Checkout!</header>
    <OrderDisplay></OrderDisplay>
    <ShippingCard></ShippingCard>

    <TotalCard></TotalCard>
    <CheckoutButton></CheckoutButton>
    
    
    
    </div>
   
    

    )




}

export default checkOutpage