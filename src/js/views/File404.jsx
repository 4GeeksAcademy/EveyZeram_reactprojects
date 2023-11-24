import React from "react";
import { Link } from "react-router-dom";

export const File404 = () => {
    return (
    <>
     {/* <nav className="navbar navbar-light bg-light mb-3 p-2">
        <Link to="/"><span className="navbar-brand mb-0 h1">Home</span></Link>
           </nav> */}
     <h1 className="text-center text-info mt-5">Error 404
     Page Not Found</h1>
     <div className="container-fluid p-5 text-center">
    <Link to="/">Get back Home</Link>
     </div>
    </>
        )
}