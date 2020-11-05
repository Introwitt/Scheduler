import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../store/actions/todoActions';

function CreateTodo(props) {

  
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(content);
        props.createTodo(content);

    }

        return (
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Todo</h5>
                    {/* <div className="input-field">
                        <input type="text" id='title' onChange={handleChange} />
                        <label htmlFor="title">Todo Title</label>
                    </div> */}
                        
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                        <label htmlFor="content">Todo Content</label>
                    </div>
            
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}
export default connect(null, mapDispatchToProps)(CreateTodo)