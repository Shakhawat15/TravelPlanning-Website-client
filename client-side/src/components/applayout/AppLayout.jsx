import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
