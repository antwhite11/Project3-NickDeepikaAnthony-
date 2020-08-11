import React, { Component } from "react";
import "./login.css";
import { Col, Row, Container } from "../../components/Grid";

class LForm extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Fill out both boxes please!");
    } else {
        window.location.replace("/productspage")
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
          
          <Container>
              <div class = "login-box">
        <form className="form">
          <input class="user-box"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input class="user-box"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <a>
      <span></span>
      <span></span>
          <button onClick={this.handleFormSubmit}>Submit</button>
          
          </a>
          <p><a class="cancel" href="/signup">Sign-up</a></p>
        </form>
        </div>
        
        </Container>
      </div>
      
      
        
    );
  }
}

export default LForm;
