import React, { useState } from "react";
import { Col, Row, Container } from "../../components/Grid"
import ProductList from "../../components/ProductList"
import API from "../../utils/API";

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("")

  API.getProducts()
  .then(res => {
    console.log(res.data)
    setProducts(res.data)
  })
  .catch(err => setError(err));

   return(
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div class="card-deck">
          <ProductList products={products} />
          </div>
        </Col>
      </Row>
    </Container> 
    
    )
}

export default productsPage

