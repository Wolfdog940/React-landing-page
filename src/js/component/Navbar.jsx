
import React from "react";

const Navbar =(props)=>{

console.log(props);


return   (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="  d-flex justify-content-center">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-secondary" href="#">Pricing</a>
      </li>
      </ul>
      
        
  </div>
</div>
</nav>);
}

export default Navbar;