import React from 'react'

import Button from '../Button'

const camelCased = myString => (
    myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);

class Register extends React.Component {
    state = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        errorMessages: []
    }


    handleRegister = (event) => {

        event.preventDefault();
        console.dir(this.state);
    }

    handleFormElementChange = (event) => {
        const { value, id } = event.target;
        const parsedId = camelCased(id);
        this.setState({
            [parsedId]: value
        })
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
        const { email, firstName, lastName, password, errorMessages } = this.state;
        return (
            <form onSubmit={this.handleRegister}>
                {
                    errorMessages.length ? <ul>
                        {
                            errorMessages.map((message, idx) => <li key={idx}>{message}</li>)
                        }
                    </ul> : null
                }
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleFormElementChange}
                    required
                    onBlur={this.checkValidity}
                /><br />
                <label htmlFor="first-name">First name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={firstName}
                    onChange={this.handleFormElementChange}
                    required
                    onBlur={this.checkValidity}
                /><br />
                <label htmlFor="last-name">Last name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={lastName}
                    onChange={this.handleFormElementChange}
                    required
                    onBlur={this.checkValidity}
                /><br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={this.handleFormElementChange}
                    required
                    onBlur={this.checkValidity}
                /><br />
                <button type="submit">Submit</button>
                <Button />
            </form>
        )
    }
}

export default Register;

Register.defaultProps = {
    products: []
}