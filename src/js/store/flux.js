// get state es una función. Importante el store y el action
const getState = ({ getStore, getActions, setStore }) => {
	return {
		// store es un objeo con variables globales
		store: {
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }],
			cohorte: "Go to Home",
			isLogin: false,
			myArray: [],
			myObjeto: {},
			agenda: [],
			currentContact: {}, // Para poder editar contacto (updateform)
			people: {}

		},
		actions: {
			currentContact: ((contact) => setStore({currentContact: contact}))
			// Use getActions to call a function within a fuction (funciones globales que se pueden usar en cualquier componente)
			// exampleFunction: () => {
				
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
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
// CONTACT LIST
			getUsers: async () => {
				// 1. Definir la URL
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/evey_agenda";
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
					setStore({ "agenda": data })
					localStorage.setItem('usersLocal', JSON.stringify(data));// se usa para meter el contenido de data en agenda. 
					console.log(data) // para ver qué trae
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			},
			// AÑADIR UN USUARIO
			createUsers: async (newUser) => { //definimos newUser
				// 1. Definir la URL
				const url = "https://playground.4geeks.com/apis/fake/contact";
				// 2. Options
				const options = {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(newUser)
				};
				// 3. Response
				const response = await fetch(url, options);
				// 4. Verificar response (console log)
				if (response.ok) {
					const data = await response.json();
					// añades getUsers para recargar a lista de usuarios
					getActions().getUsers();
					// 5. If = ok; Tratamiento del OK - definimos el data
					// const data = await response.json();
					// setStore({ "agenda": data })  se usa para meter el contenido de data en agenda. Pero no hace falta porque ya está en el GET

				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			},
			// BORAR UN USUARIO
			deleteUsers: async (id) => {
				const urlBase = 'https://playground.4geeks.com/apis/fake/contact/';
				const url = urlBase + id;
				const options = {
					method: 'DELETE',
					// headers: {
					// 	'Content-type': 'application/json'
					// }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					console.log('Usuario Eliminado');
					const data = await response.json();
					// añades getUsers para recargar a lista de usuarios
					getActions().getUsers();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			// EDITAR UN USUARIO
			updateUsers: async () => {
				// 1. Definir la URL
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/evey_agenda";
				// 2. Options
				const options = {
					method: 'PUT'
				};
				// 3. Response
				const response = await fetch(url, options);
				// 4. Verificar response (console log)
				if (response.ok) {
					// 5. If = ok; Tratamiento del OK - definimos el data
					const data = await response.json();
					setStore({ "agenda": data })
					localStorage.setItem('usersLocal', data);// se usa para meter el contenido de data en users. 
					console.log(data) // para ver qué trae
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			},

///////////////////////STAR WARS/////////////////
// getPeople: async () => {
// 	const url = "https://www.swapi.tech/api/people";
// 	const options = {
// 		method: 'GET'
// 	};
// 	const response = await fetch(url, options);
// 	if (response.ok) {
// 		const data = await response.json();
// 		setStore({ "people": data })
// 		localStorage.setItem('usersLocal', data);
// 		console.log(data) 
// 	} else {
// 		console.log('Error:', response.status, response.statusText)
// 	}

// },
			
		}
	};


export default getState;
