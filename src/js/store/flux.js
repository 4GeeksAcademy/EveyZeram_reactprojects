// get state es una función. Importante el store y el action
const getState = ({ getStore, getActions, setStore }) => {
	return {
		// store es un objeo con variables globales
		store: {
			// STAR WARS
			favorites: [],
			characters: [],
			planets: [],
			starships: [],
			detailCharacter: {}
		},
		actions: {
			// Use getActions to call a function within a fuction (funciones globales que se pueden usar en cualquier componente)
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] })
			},

			removeFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((item, id) => { return item != name }) })

			},

			getCharacters: async () => {
				// 1. Definir la URL
				const url = 'https://www.swapi.tech/api/' + 'people';
				// 2. Options
				const options = {
					method: 'GET'
				};
				// 3. Response
				const response = await fetch(url, options);
				// 4. Verificar response (console log)
				if (response.ok) {
					// 5. If = ok; Tratamiento del OK - definimos el data
					const data = await response.json();
					// Grabar los datos en el store y en local Storage
					setStore({ "characters": data.results })
					localStorage.setItem('characters', JSON.stringify(data.results))
					console.log(data),
						console.log(data.results) // para ver qué trae

				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			},
			getPlanets: async () => {
				// 1. Definir la URL
				const url = 'https://www.swapi.tech/api/planets';
				// 2. Options
				const options = {
					method: 'GET'
				};
				// 3. Response
				const response = await fetch(url, options);
				// 4. Verificar response (console log)
				if (response.ok) {
					// 5. If = ok; Tratamiento del OK - definimos el data
					const data = await response.json();
					// Grabar los datos en el store y en local Storage
					setStore({ "planets": data.results })
					console.log(data),
						console.log(data.results) // para ver qué trae
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			},
			getStarships: async () => {
				const url = 'https://www.swapi.tech/api/starships';
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ "starships": data.results })
					console.log(data),
						console.log(data.results) // para ver qué trae
				} else {
					console.log('Error:', response.status, response.statusText)
				}
			},

			getCharactersDetail: async (id) => {
				const url = `https://www.swapi.tech/api/people/${id}`;
				const options = { method: 'GET' };
				const response = await fetch(url, options);
				
				if (response.ok) {
					const data = await response.json();
					setStore({ detailCharacter: data.result });
				} else {
					console.log('Error:', response.status, response.statusText);
				}
			}

		}
	};
};

export default getState;
