import React from "react";
import "./style.css";
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
        <p><strong>Price:</strong> {props.product.price}</p>
        <p><strong>Catogery:</strong> {props.product.catogery}</p>
        <p><i className="material-icons" color='#212121' size='medium'>add_shopping_cart </i></p>
      {/* <div className="content">
        <ul>
          <div>
            <strong>Product Name:</strong> {props.product.productName}
          </div>
          <div>
            <strong>Description:</strong> {props.product.description}
          </div>
          <div>
            <strong>Price:</strong> {props.product.price}
          </div>
          <div>
            <strong>Catogery:</strong> {props.product.catogery}
          </div>
          <div>
            <i className="material-icons" color='#212121' size='medium'>add_shopping_cart </i>
          </div>
        </ul>
      </div> */}
    </div>


  );
}

export default Card;


{/* <div class="project-area col-12 d-flex justify-content-center">
                    <div class="card-columns">
                        <div class="card dayplanner-card">
                            <img class="card-img-top" src="./assets/Images/Day_scheduler.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Day Planner</h5>
                                <p>
                                    <a href="https://github.com/ankareddydeepika/work_day_scheduler"
                                        class="card-link"><i class="fa fa-github" aria-hidden="true"></i>Link to GitHub
                                        repository</a>
                                </p>
                                <p>
                                    <a href="https://ankareddydeepika.github.io/work_day_scheduler/"
                                        class="card-link"><i class="fa fa-paper-plane" aria-hidden="true"></i>Link to
                                        Deployed Version</a>
                                </p>
                            </div>
                        </div> */}
