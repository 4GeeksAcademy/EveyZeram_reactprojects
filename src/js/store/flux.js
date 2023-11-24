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
			users: []
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
			getUsers: async () => {
				// 1. Definir la URL
				const url = "https://jsonplaceholder.typicode.com/users";
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
					setStore({ "users": data })
					console.log(data) // para ver qué trae
				} else {
					console.log('Error:', response.status, response.statusText)
				}
				// 6. If Not - Tratamiento del ERROR
				// es un atributo de la respuesta en HTML or eso {} 
			}
		}
	};
};

export default getState;
