import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"
import checkOutpage from "./pages/checkoutPage"
import orderSubmitted from "./pages/orderSubmitted"
import { StoreProvider } from "./utils/GlobalState";

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
            <StoreProvider>
            
                   <Route exact path="/productsPage" component={productsPage}/>
                   <Route exact path="/checkoutPage" component={checkOutpage}/>
                   <Route exact path="/orderSubmitted" component= {orderSubmitted}/>
             
            </StoreProvider>
            </div>
        </Router>
    )
}
export default App;