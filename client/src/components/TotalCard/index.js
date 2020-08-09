import React from "react"



function TotalPrice (props){
   
    
    var num1= 20
    var num2 = 25
    var add = function(){

        var price= num1+num2
        return price


    }


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

  
            Total Price: ${add()}

            <br/>
            <br/>
  
            </div>
  
           
         </div>
  
          
  
  
         
        </div>
        
  
  
  
      </div>






    )






}


export default TotalPrice