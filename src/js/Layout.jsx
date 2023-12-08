import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";
import { Home } from "./views/Home.jsx";
import injectContext from "./store/appContext.js";
import { Footer } from "./component/Footer.jsx";
import { File404 } from "./views/File404.jsx";
import { Starwarshome } from "./views/Starwarshome.jsx";
import { CardSW } from "./component/CardSW.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { Starships } from "./views/Starships.jsx";


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
						<Route path="/" element={<Starwarshome />} />
						<Route path="*" element={<File404/>}/>
						<Route path="/starwars-home" element={<Starwarshome />} />
						<Route path="/cardsw" element={<CardSW />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/starships" element={<Starships />} />
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