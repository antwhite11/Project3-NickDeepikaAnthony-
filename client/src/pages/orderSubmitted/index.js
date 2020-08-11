import React from "react"
import GoHomeButton from "../../components/GoHome Button/goHomeButton"
import { Link } from "react-router-dom"




const orderSubmitted = () => {
    return (

        <div className="landing-image">

        <div>Your order has been submitted. Thank You User.</div>
   
       <Link to="/"> <GoHomeButton /></Link>
        </div>
       



        






    )



}


export default orderSubmitted