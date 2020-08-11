import React, {useState} from "react"
import OrderDisplay from "../../components/orderDisplay/index"
import CheckoutButton from "../../components/CheckoutButton"
import TotalCard from "../../components/TotalCard/index"
import ShippingCard from "../../components/ShippingCard/index"
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM } from "../../utils/actions";
import CartList from "../../components/CartList"
import { Link } from "react-router-dom"
import "./style.css"




const checkOutpage = () => {

    const[state,dispatch]= useStoreContext();
    

    var headerStyle = {
        
        fontSize: "55px",
        
        }


    var linkFloat = {

        marginRight:"100px"

    }


  
 

    return (
        
    <div className="landing-image">
       
    <header style={headerStyle} className="navbar navbar-expand-lg navbar-custom"> <div><Link to="/productsPage"> <a href="#" style={linkFloat} class="previous col-sm-3 navbar-brand pull-left">&laquo;Shop</a></Link></div><div className="col-sm-9 text-center">
   
        
        Checkout!</div></header>
    {console.log("here")}
    {console.log(state.cartProducts)}
    {console.log("cart")}
    <div className="cartListMargin">
    <CartList products={state.cartProducts} /></div>
    

    <TotalCard></TotalCard>
    <Link to="/orderSubmitted"><CheckoutButton></CheckoutButton></Link> 
    
    
    
    
    </div>
   
    

    )




}

export default checkOutpage