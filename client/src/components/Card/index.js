import React from "react";

function Card(props) {
  return (
    
      <div className="card">
        <div className="img-container">
          <img class="card-img-top" src={props.product.imageURL} alt="Card image cap"></img>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Product Name:</strong> {props.product.productName}
            </li>
            <li>
              <strong>Description:</strong> {props.product.description}
            </li>
            <li>
              <strong>Price:</strong> {props.product.price}
            </li>
            <li>
              <strong>Catogery:</strong> {props.product.catogery}
            </li>
          </ul>
        </div>
      </div>
         

  );
}

export default Card;
