import React from "react";
import "./style.css";
function Sort(props) {

    return (

        <button type="button" className="btn default btn-lg mr-3" {...props} id="btnSort" role="button">
            Sort By Price
        </button>
    )
}

export default Sort;


