interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

interface UserState {
    users: User[],
    isLoading: boolean,
    error: null | string
}

// interface UserAction {
//     type: string,
//     payload?: any
// }

interface FetchUserInterface {
    type: UserActionsTypes.FETCH_USERS
    // payload?: any
}

interface FetchUserSuccessInterface {
    type: UserActionsTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUserErrorInterface {
    type: UserActionsTypes.FETCH_USERS_ERROR
    payload: string
}

export enum UserActionsTypes {
     FETCH_USERS = 'FETCH_USERS',
     FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
     FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

export type UserAction =   FetchUserInterface | FetchUserSuccessInterface | FetchUserErrorInterface

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionsTypes.FETCH_USERS:
            return {...state, users: [], isLoading: true}
        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return {...state, users: action.payload, isLoading: false}
        case UserActionsTypes.FETCH_USERS_ERROR:
            return {...state, isLoading: false,error: action.payload}
        default: return state
    }
}
