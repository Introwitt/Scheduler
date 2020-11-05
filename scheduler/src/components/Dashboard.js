import React from 'react'
import Recommendation from './Recommendation'
import TodoList from './TodoList'
import {connect} from 'react-redux'

function Dashboard(props) {
    // console.log(props.todos);
    const {todos} = props;
    console.log(props);
    return (
        <div className = "dashboard container">
            <div className = "row">
                <div className = "col s12 m6">
                    <TodoList todos = {todos}/>
                </div>
                <div className = "col s12 m3 offset-m3">
                    <Recommendation />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
   return{
       todos:state.todo.todos
   } 
}

export default connect(mapStateToProps)(Dashboard)
