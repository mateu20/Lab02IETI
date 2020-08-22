import React, {Component} from 'react';

import './App.css';
import logo from './Components/logo.svg';
import { Login } from "./Components/Login";
import { TodoApp } from "./Components/TodoApp";
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: JSON.parse(localStorage.getItem('recordar')) };  
        const isLogged = JSON.parse(localStorage.getItem('recordar'));
        this.state = { isLoggedIn: isLogged }      
    }
    changeView() {
        const newLogin = this.state.isLoggedIn === false ? true : false;
        this.setState({ isLoggedIn: newLogin });
    }

    render() {


        const LoginView = () => (
            <Login/>
        );

        const TodoAppView = () => (
            <TodoApp />
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />                    
                    <h4>Login: {localStorage.getItem('recordar')}</h4>
                    <div>
                        <Route component={!this.state.isLoggedIn ? LoginView : TodoAppView} />
                    </div>
                </div>
            </Router>
        );
    }      
}

export default App;
