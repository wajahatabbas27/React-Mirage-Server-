import React, { useState } from 'react'

let baseUrl = "fakeapi";

export const Todo = () => {

    const [data, setData] = useState([]);

    const addTodoHandler = () => {
        fetch(`/${baseUrl}/addTodos`, {
            method: "POST",
            body: { id: 1234, text: "Venom AZ" }
        }).then(res => {
            console.log("Success", res);
        }).catch(error => {
            console.log("Error Add Todo", error);
        })
    }

    const getDataHandler = () => {
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => {
                setData(data.todo);
                console.log("data", data)
            })
    }

    return (
        <div>
            Hello from Todos
            <br />
            <button onClick={() => { addTodoHandler() }}>Add</button>
            <button onClick={getDataHandler}>getTodo</button>
            <br />
            {
                JSON.stringify(data)
            }

        </div>
    )
}
