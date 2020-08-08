import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-light justify-content-center mt-4">
            <form class="form-inline">
                <button type="button" class="btn btn-primary btn-lg mr-3" id="btnSort">
                Sort By Price
                </button>
                <input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Type a name" aria-label="Search" id="search"/>
                
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
            </form>
        </nav>
    )
}

export default Navbar;

    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //             <a className="navbar-brand" href="/">
    //                 LinkedUp
    //   </a>
    //         </nav>


    {/* <form class="form-inline">
                <button type="button" class="btn btn-primary btn-lg mr-3" id="btnSort">Sort</button>
                <input class="form-control form-control-lg mr-sm-2" type="search" placeholder="Type a name" aria-label="Search" id="search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
         </form> */}