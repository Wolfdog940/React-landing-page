import React from "react";

const Navbar = (props) => {

  console.log(props);


  return (<nav class=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="  container col-12 d-flex justify-content-around ">
      <div className="container col-10"><a className="navbar-brand" href="#">Start Bootstrap</a></div>

      <div className="container col-2">
        <div className="container"><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button></div>
        <div className="navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
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

    </div>
  </nav>);
}

export default Navbar;
