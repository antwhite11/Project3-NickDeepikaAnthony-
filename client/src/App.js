import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"
import checkOutpage from "./pages/checkoutPage"
import orderSubmitted from "./pages/orderSubmitted"
import { StoreProvider } from "./utils/GlobalState";
import LForm from "./pages/login/loginform";
import Form from "./pages/signup/signupform";

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
            
            <StoreProvider>
                <Route exact path='/' component={LForm} />
                <Route exact path="/signup" component={Form}/>
                <Route exact path="/productsPage" component={productsPage}/>
                <Route exact path="/cart" component={checkOutpage}/>
                <Route exact path="/orderSubmitted" component= {orderSubmitted}/>
                
            </StoreProvider>
            </div>
        </Router>
    )
}
export default App;