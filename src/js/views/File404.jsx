import React from "react";
import { Link } from "react-router-dom";

export const File404 = () => {
    return (
        <>
            {/* <nav className="navbar navbar-light bg-light mb-3 p-2">
        <Link to="/"><span className="navbar-brand mb-0 h1">Home</span></Link>
           </nav> */}
            
            <div className="container-fluid p-5 text-center">
            <img src="https://media.licdn.com/dms/image/C5612AQGN00aSnczzRg/article-inline_image-shrink_1500_2232/0/1520203381486?e=1707955200&v=beta&t=gGznwy7fgmlopk7Q_IFoS-2qggb38KcdZhJzyuR2VjQ" className="card-img-top w-100 h-100" alt="Starship" />
                <Link to="/">Get back Home</Link>
            </div>
        </>
    )
}