import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TodoList from './components/todo-list'
import TodoEdit from './components/todo-edit'

export default () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TodoList}></Route>
      <Route path={"/edit"} component={TodoEdit}></Route>
    </Switch>
  </BrowserRouter>
