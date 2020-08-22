import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">        
                        <form onSubmit={this.handleSubmit} className="form">
                            <Typography variant="h3">New TODO</Typography>
                        
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="text">Text</InputLabel>
                            <Input id="text" onChange={this.handleTextChange} value={this.state.text}  name="text" autoComplete="text" autoFocus />        
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="priority">Priority</InputLabel>
                            <Input id="priority" onChange={this.handlePriorityChange} value={this.state.priority} name="priority" autoComplete="priority" autoFocus />
                        </FormControl>
                    

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                            </DatePicker>

                            <br />
                            <br />

                            <Button type="submit" fullWidth variant="contained" color="primary" className="submit"
                            
                                >
                        Add #{this.state.items.length + 1}
                    </Button>
                
                <br />
                <br />
                        </form>
                        <TodoList todoList={this.state.items} />
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default TodoApp;
