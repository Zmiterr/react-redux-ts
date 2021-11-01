import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchTodos} from "../store/reducers/action-creators/todo";

const TodoList:FC = () => {
    const {isLoading, todos, error} = useTypedSelector(state => state.todos)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos())
    }, [dispatch])

    if(isLoading) return <div>Loading</div>
    if(error) return <div>Happen fetch error: {error}</div>
    return (
        <div>
            {todos.map(todo =>
                <p key={todo.id}>{todo.title} Completed: {todo.completed?'Yes':'No'}</p>
            )}
        </div>
    );
};

export default TodoList;
