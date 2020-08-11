import React from "react";
import API from "../utils/API"

import {useHistory} from "react-router-dom"

var buttonStyle = {

    marginLeft: "1450px",
    marginTop: "20px"
}



 function CheckoutButton(props)  {

  const getData= () =>  {

    API.postOrders().then(res=>{

        console.log(res.data)


    })
    
    
}
 



  return (
   <div class="container">
       <div class="row justify-content-center">
        <div class="col-sm-9" style={buttonStyle}>



        <button onClick={()=>getData()} >Place Order</button>


        </div>




       </div>
       




   </div>
  );

}
export default CheckoutButton ;
