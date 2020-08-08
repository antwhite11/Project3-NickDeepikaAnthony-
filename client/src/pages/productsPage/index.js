import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid"
import ProductList from "../../components/ProductList"
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm"
import Sort from "../../components/Sort"
// import Search from "../../components/Search"

const productsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  function getProducts() {
    API.getProducts()
      .then(res => {
        console.log("get products")
        console.log(res.data)
        setProducts(res.data)
      })
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
    if (!search) {
      getProducts()
      return;
    }
    console.log(search)
    searchProduct(search)
  }, [search]);


  const searchProduct = search => {
    API.getProduct(search)
      .then(res => {
        setProducts(res.data)
      })
  }

  const handleInputChange = event => {
    setSearch(event.target.value)
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <nav className="navbar navbar-light justify-content-center mt-4">
            <form className="form-inline">
              <Sort onClick={() => sortbyPrice("DESC")}></Sort>
              <SearchForm
                handleInputChange={handleInputChange}
                results={search}
              />
            </form>
          </nav>
          <div className="card-columns">
            <ProductList products={products} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default productsPage

