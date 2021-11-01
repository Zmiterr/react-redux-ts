interface TodoItem {
    id: number,
    title: string,
    completed: boolean
}

interface TodosState {
    todos: TodoItem[],
    isLoading: boolean,
    error: null | string
}
interface FetchTodoInterface {
    type: TodosActionsTypes.FETCH_TODOS
}

interface FetchTodoSuccessInterface {
    type: TodosActionsTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}

interface FetchTodoErrorInterface {
    type: TodosActionsTypes.FETCH_TODOS_ERROR
    payload: string
}

export enum TodosActionsTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'
}


const initialState: TodosState = {
    todos: [],
    isLoading: false,
    error: null
}

export type TodoAction =   FetchTodoInterface | FetchTodoErrorInterface | FetchTodoSuccessInterface

export const todoReducer = (state = initialState, action: TodoAction): TodosState => {
    switch (action.type) {
        case TodosActionsTypes.FETCH_TODOS:
            return {...state, todos: [], isLoading: true}
        case TodosActionsTypes.FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, isLoading: false}
        case TodosActionsTypes.FETCH_TODOS_ERROR:
            return {...state, isLoading: false,error: action.payload}
        default: return state
    }
}
