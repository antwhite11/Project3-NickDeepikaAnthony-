import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid"
import { Link } from 'react-router-dom'
import ProductList from "../../components/ProductList"
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm"
import Sort from "../../components/Sort"
// import SearchIcon from '@material-ui/icon/Search'
// import ShoppingCartIcon from '@material-ui/icon/ShoppingCart';
// import Cart from "../../components/Cart";
import MaterialIcon, { colorPalette } from 'material-icons-react';


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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Shopping</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Sort onClick={() => sortbyPrice("DESC")}></Sort>
            <SearchForm
              handleInputChange={handleInputChange}
              results={search}
            />
            <Link to="/cart"><MaterialIcon icon="shopping_cart" color='#212121' size='large' /></Link>

          </nav>
        </Col>
      </Row>

      <div className="container">
        <div className="row" id="Products">
          <div className="project-area col-12 d-flex justify-content-center">
            <div className="card-columns">
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>


    </Container>
  )
}

export default productsPage

