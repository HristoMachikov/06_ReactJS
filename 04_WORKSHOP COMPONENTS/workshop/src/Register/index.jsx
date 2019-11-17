import React from 'react';

import '../sheared/loginRegister.css';

const Register = () => {
    return (
        <div className="Login">
            <h1>Register Page</h1>
            <form>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="form-control">
                    <label>Re-Password</label>
                    <input type="password" />
                </div>
                <div className="form-control">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;