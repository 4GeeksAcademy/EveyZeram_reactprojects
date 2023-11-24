import React, { useEffect, useState } from "react";

export const JPHUsers = () => {
    const [user, setUser] = useState('evelyn')

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
        } else {
            console.log('Error: ', response.status, response.statusText)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container mt-3">
            <h1>Users</h1>
            <div>
                {users ? users.map((item) => {
                    return (
                        <div className="card mp-2">
                            <h2 className="card-title">{item.id} {item.name}</h2>
                            <p className="card-text">{item.email}</p>
                            <p className="card-text">{item.adress.city}</p>
                            <i className="fas fa-trash"></i>
                        </div>
                    )
                })
                    : ''}

            </div>
        </div>
    )
}