import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productsPage from "./pages/productsPage"
import Wrapper from "./components/Wrapper"

function App(){
    document.title = "Online Shopping";
    return(
        <Router>
            <div>
                <Wrapper>
                   <Route exact path="/productsPage" component={productsPage}/>
                </Wrapper>
            </div>
        </Router>
    )
}
export default App;