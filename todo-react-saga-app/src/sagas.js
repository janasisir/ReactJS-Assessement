import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import { REQUEST_FETCH_TODOS, REQUEST_TODOS_FAILED, REQUEST_CREATE_TODO, REQUEST_UPDATE_TODO, REQUEST_REMOVE_TODO, REQUEST_COMPLETE_TODO } from './actions/types'
import { receiveTodos } from './actions/todo-actions'
import { fetchTodos, createTodo, updateTodo, removeTodo, completeTodo } from './todo-api'

function* requestFetchTodos() {
    try {
        const data = yield call(fetchTodos)
        yield put(receiveTodos(data))
    } catch (e) {
        yield put({ type: REQUEST_TODOS_FAILED, message: e.message })
    }
}

function* requestCreateTodo(action) {
    try {
        const data = yield call(createTodo, action.payload)
        yield put(receiveTodos(data))
    } catch (e) {
        yield put({ type: REQUEST_TODOS_FAILED, message: e.message })
    }
}

function* requestUpdateTodo(action) {
    try {
        const data = yield call(updateTodo, action.payload)
        yield put(receiveTodos(data))
    } catch (e) {
        yield put({ type: REQUEST_TODOS_FAILED, message: e.message })
    }
}

function* requestRemoveTodo(action) {
    try {
        const data = yield call(removeTodo, action.payload)
        yield put(receiveTodos(data))
    } catch (e) {
        yield put({ type: REQUEST_TODOS_FAILED, message: e.message })
    }
}

function* requestCompleteTodo(action) {
    try {
        const data = yield call(completeTodo, action.payload)
        yield put(receiveTodos(data))
    } catch (e) {
        yield put({ type: REQUEST_TODOS_FAILED, message: e.message })
    }
}

function* fetchTodoSaga() {
    yield takeLatest(REQUEST_FETCH_TODOS, requestFetchTodos)
}

function* createTodoSaga() {
    yield takeLatest(REQUEST_CREATE_TODO, requestCreateTodo)
}

function* updateTodoSaga() {
    yield takeLatest(REQUEST_UPDATE_TODO, requestUpdateTodo)
}

function* removeTodoSaga() {
    yield takeLatest(REQUEST_REMOVE_TODO, requestRemoveTodo)
}

function* completeTodoSaga() {
    yield takeLatest(REQUEST_COMPLETE_TODO, requestCompleteTodo)
}

export default function* sagas() {
    yield all([fork(fetchTodoSaga), fork(createTodoSaga), fork(updateTodoSaga), fork(removeTodoSaga), fork(completeTodoSaga)])
}