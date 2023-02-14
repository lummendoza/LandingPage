import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../../js/component/NavBar.jsx";
import PageTop from "../../js/component/PageTop.jsx";


//create your first component
const Home = () => {
	return (
		<div className="page">
			<NavBar/>
			<div className="container d-flex justify-content-center p-10">
				<PageTop/>

			</div>

			
			
		</div>
	);
};

export default Home;
