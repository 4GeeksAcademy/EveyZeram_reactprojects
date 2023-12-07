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
import { Formcontact } from "./component/Formcontact.jsx";
import { Contactlist } from "./views/Contactlist.jsx";
// import { Todolist } from "./views/Todolist.jsx"
import { File404 } from "./views/File404.jsx";
import { Carduser } from "./component/Carduser.jsx";
import { Updateform } from "./component/Updateform.jsx"
import { Starwarshome } from "./views/Starwarshome.jsx";
import { CardSW } from "./component/CardSW.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { Starships } from "./views/Starships.jsx";
import { TodoListFetch } from "./views/TodolistFetch.jsx";
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
						<Route path="/form-contact" element={<Formcontact />} />
						<Route path="/contact-list" element={<Contactlist />} />
						<Route path="/carduser" element={<Carduser />} />
						<Route path="/todolistfetch" element={<TodoListFetch />} />
						<Route path="/update-form" element={<Updateform />} />
						<Route path="/starwars-home" element={<Starwarshome />} />
						<Route path="/cardsw" element={<CardSW />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="*" element={<File404 />} />
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