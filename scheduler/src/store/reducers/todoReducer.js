const initState = {
    todos: [
        {id: '1', title:'help me man', content: 'lorem ipsum'},
        {id: '2', title:'save me man', content: 'lorem ipsum'},
        {id: '3', title:'kill me man', content: 'lorem ipsum'}
    ]
};

const todoReducer = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_TODO':
        console.log('created todo', action.todo);
    }
    return state;
}

export default todoReducer;