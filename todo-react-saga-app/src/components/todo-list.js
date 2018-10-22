import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestTodos, requestRemoveTodo, requestCompleteTodo, requestEditTodo } from '../actions/todo-actions'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import IconButton from '@material-ui/core/IconButton'
import { withRouter } from 'react-router'
import TodoAdd from '../components/todo-add';
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  button: {
    textTransform: 'none'
  },
  done: {
    textDecoration: 'line-through',
    color: 'red'
  }
});

const Link = withRouter(({ history, path, text }) => {
  return (
    <li onClick={() => { history.push(path) }}>
      {text}
    </li>
  )
})

class TodoList extends Component {
  componentWillMount() {
    this.props.requestTodos();
  }
  render() {
    const classes = this.props.classes
    const todos = this.props.todos;
    return (
      <div>
        <TodoAdd />
        <br />
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableBody>
                {(todos || []).map((todo) =>
                  <TableRow key={todo.id}>
                    <TableCell onClick={() => this.props.requestEditTodo(todo)} component="th" scope="row" className={todo.completed ? classes.done : ''}>
                      {todo.completed ? todo.title : <Link path={'/edit'} text={todo.title} />}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Button variant="contained" onClick={() => this.props.requestCompleteTodo(todo)} disabled={todo.completed} className={classes.button}>Completed</Button>
                      <IconButton aria-label="Remove">
                        <CancelIcon onClick={() => this.props.requestRemoveTodo(todo)}/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </div>
    )
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  requestTodos: PropTypes.func.isRequired,
  requestRemoveTodo: PropTypes.func.isRequired,
  requestCompleteTodo: PropTypes.func.isRequired,
  requestEditTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos.items,
  todo: state.todos.item
});

const mapDispatchToProps = dispatch => bindActionCreators({ requestTodos, requestRemoveTodo, requestCompleteTodo, requestEditTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoList));