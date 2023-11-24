import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";
// Import VIEWS
import { Home } from "./views/Home.jsx";
import { Demo } from "./views/Demo.jsx";
import { Single } from "./views/single.js";
// 
import injectContext from "./store/appContext.js";
// Import components
// import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Contact } from "./views/Contacts.jsx";
import { Contactlist } from "./views/Contactlist.jsx";
import {Todolist} from "./views/Todolist.jsx"
import { File404 } from "./views/File404.jsx";
import { Carduser } from "./component/Carduser.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/contacts" element={<Contact />} />
						<Route path="/contact-list" element={<Contactlist />} />
						<Route path="/carduser" element={<Carduser />} />
						<Route path="/todolist" element={<Todolist />} />
						<Route path="*" element={<File404/>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);


// El layout es nuestro componente principal. Aquí hacemos el injectContext
//