import React from "react";

//include images into your bundle

import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";

//create your first component
const Home = () => {
	return (
		
			<div className="">
				<div className="container-fluid m-0 p-0">
			<Navbar texto={"hola que tal"}/>
			
			</div>
			<div className="container"><Header/></div>
			
			</div>
			
		
	);
};

export default Home;
