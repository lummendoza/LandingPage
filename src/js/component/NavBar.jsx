import React from "react";


//create your first component
const NavBar = () => {
	return (
		<div className="NavBar d-flex justify-content-between bg-secondary" >
            <h3 className="p-2 text-white">Start Bootstrap</h3>
            <ul className="nav justify-content-end p-2">
                <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                </li>
            </ul>
		</div>
	);
};

export default NavBar;