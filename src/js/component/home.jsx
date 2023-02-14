import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../../js/component/NavBar.jsx";
import PageTop from "../../js/component/PageTop.jsx";
import PageMid from "../../js/component/PageMid.jsx";
import PageBottom from "../../js/component/PageBottom.jsx";


//create your first component
const Home = () => {
	return (
		<div className="page">
			<NavBar/>
			<div className="container d-flex flex-column justify-content-center p-10">
				<PageTop/>
				<PageMid/>
			</div>
			<PageBottom/>

			
			
		</div>
	);
};

export default Home;
