import React, { useState } from "react";
import { Link } from "react-router-dom";
//Importamos arriba


// Creamos la constante con los estados que vamos a usar
export const Todolist = () => {
  const [task, setTask] = useState("");
  const [user, setUser] = useState('evelyn')
  const [list, setList] = useState([]);
  const url_base = 'https://playground.4geeks.com/apis/fake/todos';


  // Tenemos que crear una lista con FETCH+API+POSTMAN
  // Usamos GET, POST, PUT, DELETE (misma estructura, mirar las diferencias en los parámetros)

  // Empezamos por el POST para crear
  const createTodo = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([])
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    } else {
      console.log('Error: ', response.status, response.statusText)
    }
  }

  // Seguimos con el GET para poder conseguir los elementos (ver el resultado en console log)
  const getTodos = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'GET'
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setList(data)
    } else {
      console.log('Error: ', response.status, response.statusText)
    }
  }
  // PUT para modificar (ver el resultado en console log) > Duda.
  const updateTodos = async (newTask) => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...list, newTask])
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    } else {
      console.log('Error: ', response.status, response.statusText)
    }
  }

  // Delete para borrar el usuario (ver el resultado en console log)
  const deleteTodos = async () => {
    const url = url_base + '/user/' + user;
    const options = {
      method: 'DELETE'
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setList([])
      console.log(data)
    } else {
      console.log('Error: ', response.status, response.statusText)
    }

  }

  // Añadimos una función para poder borrar elementos con el icono de TRASH. Duda (hover)
  const deleteTask = (item) => {
    setList(list.filter((element, id) => {
      return item !== element;
    }))
  };
  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return
    };
    const newTask = { label: task, done: false }
    setList([...list, newTask]);
    updateTodos(newTask)
    setTask("");
  }

  // Devolvemos toda la estructura visual: botones, iconos...
  return (
        <div className="container col-xs-12 col-md-8 col-lg-6 my-3">
      <h1 className="text-center">My Todo List</h1>
      <button onClick={createTodo} className="btn btn-success m-3">Create a new me!</button>
      <button onClick={getTodos} className="btn btn-warning m-3">Give me more things to do</button>
      <button onClick={deleteTodos} className="btn btn-dark m-3">Goodbye my friend...</button>
      <button className="btn btn-info m-3 float-end"><Link to="/">Home</Link></button>
 
      {/* Formulario para agregar tareas (TODOLIST) */}

      <div className="mb-3">
        <form onSubmit={addTask}>
          <input className="form-control" placeholder="Write a new task" type="text"
            value={task}
            onChange={(event) => { setTask(event.target.value); }} />
        </form>
      </div>


      {/* Aquí irían la lista de tareas pendientes */}
      <h2>Here we go...</h2>
      <div className="list">
        <ul className="list-group">
          {/* Si hay tareas sin hacer, entonces muestras "pendientes" y si no "hechas**" */}
          {list.map((item, id) => {
            return <li key={id} className="list-group-item d-flex justify-content-between hidden-icon">
              {item.label} - {item.done ? 'done' : 'not done my friend'}
              <span key={id} onClick={() => { deleteTask(item) }}>
                <i className="fas fa-trash"></i>
              </span>
            </li>
          })
          }
          {/* Añadimos un resumen de las tareas pendientes */}
          <span className="list-group-item bg-light text-end fw-lighter">
            {list.length === 0 ? "No tasks, add a task" : list.length + " Item Left"}
          </span>
        </ul>
      </div>
    </div>
  );
};

// agregar el contenido finla del input en el estado list 