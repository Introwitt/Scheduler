import React from 'react'
import Recommendation from './Recommendation'
import TodoList from './TodoList'

function Dashboard() {
    return (
        <div className = "dashboard container">
            <div className = "row">
                <div className = "col s12 m6">
                    <TodoList />
                </div>
                <div className = "col s12 m3 offset-m3">
                    <Recommendation />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
