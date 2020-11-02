import React from 'react'

function TodoList() {
    return (
        <div classname = "todo-list section">
            <div className = "card z-depth-0 todo-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">Todo1</span>
                    <p>Posted By Harsh</p>
                    <p classname="grey-text">2nd November, 1pm </p> 
                </div>
            </div>

            <div className = "card z-depth-0 todo-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">Todo2</span>
                    <p>Posted By Harsh</p>
                    <p classname="grey-text">2nd November, 1pm </p> 
                </div>
            </div>

            <div className = "card z-depth-0 todo-summary">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title">Todo3</span>
                    <p>Posted By Harsh</p>
                    <p classname="grey-text">2nd November, 1pm </p> 
                </div>
            </div>
            
        </div>
    )
}

export default TodoList
