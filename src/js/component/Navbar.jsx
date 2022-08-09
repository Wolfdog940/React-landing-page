
import React from "react";

const Navbar =(props)=>{

console.log(props);


return (
    <div className="container-fluid d-flex  justify-content-between bg-dark m-0 ">
    
      <div className="mt-2 text-light">Start Bootstrap</div>
      <ul className="nav">

    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Export</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Service</a>
    </li>
    <li className="nav-item">
      <a className="nav-link ">Contac</a>
    </li>
  </ul>
  </div>
)


}

export default Navbar;