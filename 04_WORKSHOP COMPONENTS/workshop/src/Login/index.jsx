import React, { Component } from 'react';

import '../sheared/loginRegister.css';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            errorMessages: []
        };

        this.handleSubmit = this.props.handleSubmit.bind(this);
        this.handleFormElementChange = this.props.handleFormElementChange.bind(this);
    }

    checkValidity = (event) => {
        const { target } = event;
        if (!target.checkValidity()) {
            console.error("Something went wrong...")
            console.error(target.validationMessage)
            this.setState(({ errorMessages }) => ({
                errorMessages: [target.validationMessage]
            }))
        } else {
            this.setState(() => ({
                errorMessages: []
            }))
        }
    }
    render() {
        const { username, password, errorMessages } = this.state;
        const postData = { username, password }
        return (
            <div className="Login">
                <h1>Login Page</h1>
                {
                    errorMessages.length ? <ul>
                        {
                            errorMessages.map((message, idx) => <li key={idx}>{message}</li>)
                        }
                    </ul> : null
                }
                <form onSubmit={(e) => this.handleSubmit(e, postData, true,this.props.history)}>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            name="username"
                            id="username"
                            value={username}
                            onChange={this.handleFormElementChange}
                            required
                        // onBlur={this.checkValidity}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={this.handleFormElementChange}
                            required
                        // onBlur={this.checkValidity}
                        />
                    </div>
                    <div className="form-control">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }


}

export default Login;