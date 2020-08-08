import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid"
import ProductList from "../../components/ProductList"
import API from "../../utils/API";
import Sort from "../../components/Sort"
import Search from "../../components/Search"

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("")

 function getProducts() {
  API.getProducts()
    .then(res => {
      console.log("get products")
      console.log(res.data)
      setProducts(res.data)
    })
    .catch(err => setError(err));
  }

  const sortbyPrice = sort => {
  console.log("sort by price")
  API.sortProducts(sort)
    .then(res => {
      console.log(res.data)
      setProducts(res.data)
    })
};

useEffect(() => {
  if (products.length != 0) {
    return
  }
  getProducts()
}, []);

return (
  <Container fluid>
    <Row>
      <Col size="md-12">
         <nav class="navbar navbar-light justify-content-center mt-4">
            <form class="form-inline">
                <Sort onClick={() => sortbyPrice("DESC")}></Sort>
                <Search></Search>
            </form>
        </nav>
        <div class="card-columns">
          <ProductList products={products} />
        </div>
      </Col>
    </Row>
  </Container>
)
}

export default productsPage

