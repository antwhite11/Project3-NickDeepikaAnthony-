import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"
import Wrapper from "./components/Wrapper"
import checkOutpage from "./pages/checkoutPage"

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
                <Wrapper>
                   <Route exact path="/productsPage" component={productsPage}/>
                   <Route exact path="/checkoutPage" component={checkOutpage}/>
                </Wrapper>
            </div>
        </Router>
    )
}
export default App;