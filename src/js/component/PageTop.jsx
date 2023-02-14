import React from "react";


//create your first component
const PageTop = () => {
	return (
        <div className="container-fluid bg-dark text-light p-5">
            <div className="container bg-dark p-2">
                <h1 className="display-4">Welcome to my Website</h1>
                
                <p>Go to My Website</p>
                <a href="#" className="btn btn-primary">link</a>
            </div>
        </div>
    );
};

export default PageTop;