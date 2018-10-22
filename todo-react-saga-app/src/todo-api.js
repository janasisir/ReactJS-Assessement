const API = 'https://practiceapi.devmountain.com/api/tasks';

export const fetchTodos = async() => {
    const response = await fetch(API)
    const json = await response.json()
    return json
}

export const createTodo = async todo => {
    const response = await fetch(API, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const json = await response.json()
    return json
}

export const updateTodo = async todo => {
    const _updateApi = await _getApiUrl(todo.id)
    const response = await fetch(_updateApi, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const json = await response.json()
    return json
}

export const completeTodo = async todo => {
    const _completeApi = await _getApiUrl(todo.id)
    const response = await fetch(_completeApi, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const json = await response.json()
    return json
}

export const removeTodo = async todo => {
    const _removeApi = await _getApiUrl(todo.id)
    const response = await fetch(_removeApi, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const json = await response.json()
    return json
}

const _getApiUrl = async id => API.concat("/").concat(id)