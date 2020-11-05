import React from 'react'

function TodoSummary({todo}) {
    return (
        <div>
            <div className = "card z-depth-0 todo-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">{todo.title}</span>
                    <p>Posted By Harsh</p>
                    <p classname="grey-text">2nd November, 1pm </p> 
                </div>
            </div>
        </div>
    )
}

export default TodoSummary
