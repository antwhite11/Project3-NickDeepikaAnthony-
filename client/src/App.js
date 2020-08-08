import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
            
                   <Route exact path="/productsPage" component={productsPage}/>
               
            </div>
        </Router>
    )
}
export default App;