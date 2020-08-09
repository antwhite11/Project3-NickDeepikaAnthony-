import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";

function Card(props) {
  
  const [state, dispatch] = useStoreContext();
  const addToCart = () => {
  //  console.log(state.cartProducts)
    dispatch({
      type: ADD_TO_CART,
      product: props.product
    });
  };


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
        <p><button className="material-icons" color='#212121' size='medium' onClick={addToCart}>add_shopping_cart </button></p>
     
    </div>


  );
}

export default Card;


