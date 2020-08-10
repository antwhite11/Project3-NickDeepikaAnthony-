import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM } from "../../utils/actions";






function OrderDisplay(props) {
  
  const[state,dispatch]= useStoreContext();

  const removeFromCart=()=>{
  

 {dispatch({
    type: REMOVE_ITEM,
    id: props.products.productid
  })
}}


  var imageStyle = {


    border: "1 px solid #ddd",
    borderRadius: "4px",
    padding:"5px",
    width: "150px"



  }




  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class='col-sm-9 card'>
          <div class="row">
            <div class="col-sm-3">


            <img src={props.products.image} alt="item pic" style={imageStyle}/>




            </div>


            <div class="col-sm-6">

            <strong>{props.products.productName}</strong>
            <button onClick={removeFromCart}>console</button>
            


            </div>

            <div class="col-sm-3">

            <strong>{props.products.price}</strong>


            </div>


            



            
          </div>
         

          </div>

         
       </div>

        


       
      </div>
      



    </div>
  );
  }

export default OrderDisplay ;
