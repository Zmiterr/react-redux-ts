import {Dispatch} from "redux";
import axios from "axios";
import {UserAction, UserActionsTypes} from "../userReducer";


export const fetchUsers = ()=>{
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionsTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: UserActionsTypes.FETCH_USERS_ERROR, payload: String(error)})
        } finally {

        }
    }
}
