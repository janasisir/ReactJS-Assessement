import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { requestCreateTodo } from '../actions/todo-actions'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 20,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    }
})

const changeHandler = (event, item) => {
    item[event.target.name] = event.target.value
    item.completed = false
}

const submitHandler = props => {
    if (!props.todo.title) return;
    props.requestCreateTodo(props.todo);
}

const TodoAdd = props =>
    <Card className={props.classes.card}>
        <CardContent>
            <Typography className={props.classes.title}>
                TO-DO:
            </Typography>
            <TextField name="title" fullWidth margin="normal" onChange={(event) => changeHandler(event, props.todo)} />
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" className={props.classes.button} onClick={() => submitHandler(props)}>
                Add New To-Do
            </Button>
        </CardActions>
    </Card>

TodoAdd.propTypes = {
    classes: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    requestCreateTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todo: state.todos.item
})

const mapDispatchToProps = dispatch => bindActionCreators({ requestCreateTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoAdd))