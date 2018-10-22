import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { requestRemoveTodo, requestCompleteTodo, requestUpdateTodo } from '../actions/todo-actions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickComplete = this.onClickComplete.bind(this);
        this.state = this.props.todo || {};
    }
    onClickUpdate  = () => {
        var todo = { id: this.state.id, title: this.state.title, description: this.state.description, completed: false }
        this.props.requestUpdateTodo(todo);
        window.history.back();
    }
    onClickRemove  = () => {
        var todo = { id: this.state.id, title: this.state.title, description: this.state.description, completed: true }
        this.props.requestRemoveTodo(todo);
        window.history.back();
    }
    onClickComplete = () => {
        var todo = { id: this.state.id, title: this.state.title, description: this.state.description, completed: true }
        this.props.requestCompleteTodo(todo)
        window.history.back();
    }
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <TextField label="Task" name="title" value={this.state.title} onChange={this.changeHandler}
                    margin="normal" />&nbsp;
            <Button variant="contained" onClick={this.onClickComplete}>
                    Complete
            </Button>
                <br></br>
                <TextField name="description" value={this.state.description} onChange={this.changeHandler}
                    label="Description"
                    margin="normal" />&nbsp;
            <br></br>
                <br></br>
                <Button onClick={this.onClickUpdate} variant="contained" color="primary">
                    Save
            </Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={() => window.history.back()}><ArrowBackIcon />Cancel</Button>
                &nbsp;&nbsp;
            <Button onClick={this.onClickRemove} variant="contained" color="secondary">
                    Delete
            </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todo: state.todos.item
});

TodoEdit.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    requestRemoveTodo: PropTypes.func.isRequired,
    requestCompleteTodo: PropTypes.func.isRequired,
    requestUpdateTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestRemoveTodo, requestCompleteTodo, requestUpdateTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);