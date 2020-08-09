import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"
import { StoreProvider } from "./utils/GlobalState";

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
            <StoreProvider>
            
                   <Route exact path="/productsPage" component={productsPage}/>
            </StoreProvider>
            </div>
        </Router>
    )
}
export default App;