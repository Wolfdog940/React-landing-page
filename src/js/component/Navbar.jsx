
import React from "react";

const Navbar =(props)=>{

console.log(props);


return (<nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
    <div className="container d-flex justify-content-between ">
        <div className="container">
            <a className="navbar-brand text-white" href="#">
            Start Bootstrap
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
       </div>
        <div
            className="collapse navbar-collapse container d-flex justify-content-end "
            id="navbarSupportedContent">
            <ul className="navbar-nav position-absolute ">
                <li className="nav-item active">
                    <a className="nav-link text-white" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>);
}


export default Navbar;