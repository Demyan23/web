import React from "react";
import "./loader.css";
import {FadeLoader} from "react-spinners";

function Loader() {
    return(
        <div className="loader">
            <FadeLoader color="#43b02a" />
        </div>
    )
}

export default Loader;