import React from "react";

function Card(props) {
  return (

    <div className="card">
      
        <img className="card-img-top" src={props.product.imageURL} alt="Card image cap"></img>
        <div class="card-body"> 
        </div>
        <h5>
        {props.product.productName}
        </h5>
        <p><strong>Description:</strong> {props.product.description}</p>
        <p><strong>Price:</strong> ${props.product.price}</p>
        <p><strong>Catogery:</strong> {props.product.catogery}</p>
        <p><i className="material-icons" color='#212121' size='medium'>add_shopping_cart </i></p>
     
    </div>


  );
}

export default Card;


