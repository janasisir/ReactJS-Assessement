import { REQUEST_FETCH_TODOS, RECEIVE_FETCH_TODOS, REQUEST_CREATE_TODO, REQUEST_UPDATE_TODO, REQUEST_REMOVE_TODO, REQUEST_COMPLETE_TODO, REQUEST_EDIT_TODO } from './types'

export const requestTodos = () => ({
    type: REQUEST_FETCH_TODOS
})

export const receiveTodos = todos => ({
    type: RECEIVE_FETCH_TODOS,
    payload: todos
})

export const requestCreateTodo = todo => ({
    type: REQUEST_CREATE_TODO,
    payload: todo
})

export const requestUpdateTodo = todo => ({
    type: REQUEST_UPDATE_TODO,
    payload: todo
})

export const requestRemoveTodo = todo => ({
    type: REQUEST_REMOVE_TODO,
    payload: todo
})

export const requestCompleteTodo = todos => ({
    type: REQUEST_COMPLETE_TODO,
    payload: todos
})

export const requestEditTodo = todo => ({
        type: REQUEST_EDIT_TODO,
        payload: todo
})