import React from "react"
import OrderDisplay from "../../components/orderDisplay/index"
import CheckoutButton from "../../components/CheckoutButton"
import TotalCard from "../../components/TotalCard/index"

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
    <TotalCard></TotalCard>
    <CheckoutButton></CheckoutButton>
    
    
    
    </div>
   
    

    )




}

export default checkOutpage