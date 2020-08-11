import React from "react"
import { useStoreContext } from "../../utils/GlobalState"



function TotalPrice (props){



   const[state,dispatch]= useStoreContext();
   
    
      let prices = state.cartProducts.map(product=> product.price)

     
      let priceTotal= prices.reduce((a, b) => a + b, 0)



      
  

    var totalStyle= {

        marginTop:"15px",
        textAlign: "center"

    }

    
    




    return(
        
        
        <div>
        <div class="container" style={totalStyle}>
          <div class="row justify-content-center">
            <div class='col-sm-9 card'>
            <br/>

  
            Total Price: ${priceTotal}

            <br/>
            <br/>
  
            </div>
  
           
         </div>
  
          
  
  
         
        </div>
        
  
  
  
      </div>






    )






}


export default TotalPrice