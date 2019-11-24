import React, { Component } from 'react';

import '../sheared/loginRegister.css';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
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
        const { username, password, repeatPassword, errorMessages } = this.state;
        const postData = { username, password, repeatPassword }
        return (
            <div className="Register">
                <h1>Register Page</h1>
                <form onSubmit={(e) => this.handleSubmit(e, postData, false,this.props.history)} >
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            name="username"
                            id="username"
                            value={username}
                            onChange={this.handleFormElementChange}
                            required
                            onBlur={this.checkValidity}
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
                            onBlur={this.checkValidity}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="repeat-password">Re-Password</label>
                        <input
                            type="password"
                            name="repeatPassword"
                            id="repeat-password"
                            value={repeatPassword}
                            onChange={this.handleFormElementChange}
                            required
                            onBlur={this.checkValidity}
                        />
                    </div>
                    <div className="form-control">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;