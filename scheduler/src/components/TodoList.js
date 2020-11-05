import React from 'react'
import TodoSummary from './TodoSummary';

function TodoList({todos}) {
    return (
        <div classname = "todo-list section">
            {todos && todos.map(todo =>{
                return (
                    <TodoSummary todo = {todo} key = {todo.id} />
                )
            })}
        </div>
    )
}

export default TodoList
