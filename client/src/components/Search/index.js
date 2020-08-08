import React from "react";

function Search (){

    return(

        // <input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Type a name" aria-label="Search" id="search"></input>
         <div>
             <input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Type Product Name" aria-label="Search" id="search"></input>
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
         </div>     
        
    )
}

export default Search;