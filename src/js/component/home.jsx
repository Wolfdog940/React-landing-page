import React from "react";

//include images into your bundle

import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Body  from "./Body.jsx";
import Bottom from "./Bottom.jsx";


const Home = () => {
	return (
		
			<div className="">
				<div className="container-fluid m-0 p-0 sticky-top ">
			<Navbar />
			
			</div>
			<div className="container "><Header/></div>
			<div className="container "><Body/></div>
			<div className="container py-5 my-5"></div>
			<div className="container-fluid"><Bottom/></div>

			
			
			</div>
			
		
	);
};

export default Home;
