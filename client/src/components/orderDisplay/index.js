import React from "react";






function OrderDisplay(props) {


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


            <img src="https://img10.joybuy.com/N0/s560x560_jfs/t1/63260/33/5419/264052/5d3999f9E0caf583f/2593c109381a9816.jpg.dpg" alt="item pic" style={imageStyle}/>




            </div>


            <div class="col-sm-6">

            <strong>ITEM NAME</strong>
            <div><strong>QTY</strong></div>


            </div>

            <div class="col-sm-3">

            <strong>Sub-Total: $100</strong>


            </div>


            



            
          </div>
         

          </div>

         
       </div>

        


       
      </div>
      



    </div>
  );
}

export default OrderDisplay ;
