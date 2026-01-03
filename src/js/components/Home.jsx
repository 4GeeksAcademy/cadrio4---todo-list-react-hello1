import React, { useEffect, useState } from "react";


const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodos = (task) => {
        setTodos([...todos, task
        ])
    }

    const deleteTodos = (indice) => {
        const newTodos = todos.filter((task, index) => index != indice)
        setTodos(newTodos)
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h2 className="mb-5">Tengo muchos quereseres</h2>
                    <ul className="list-unstyled d-flex flex-column align-items-center mb-1">
                        <li className="w-100 mb-1">
                            <input className="form-control" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addTodos(inputValue);
                                    setInputValue("");
                                }
                            }}
                                placeholder="What do I need to do?" />
                        </li>
                        {todos.map((todo, indice) => (
                            <li key={indice} className="todo w-100 d-flex justify-content-between align-items-center mb-1">
                                <span>{todo}</span>
                                <button className="button btn btn-sm" onClick={() => deleteTodos(indice)}>
                                    <i className="bi bi-trash "></i>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {todos.length === 0 && (
                        <p className="task text-center text-muted mt-0">No tasks, add task.</p>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Home;