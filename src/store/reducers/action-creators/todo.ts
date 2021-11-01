import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodosActionsTypes} from "../todoReducer";



export const fetchTodos = ()=>{
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodosActionsTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({type: TodosActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: TodosActionsTypes.FETCH_TODOS_ERROR, payload: String(error)})
        } finally {

        }
    }
}
