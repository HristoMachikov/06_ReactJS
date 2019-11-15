import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

import './styles.css'

class Header extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const { searchValue } = this.state
    console.log(searchValue);
    return (
      <div className="header-container">
        <span>SoftUni React.js course</span>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/shoes">Shoes</Link>
        </span>
        <span>
          <Link to="/register">Registration</Link>
        </span>
        <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div >
    )
  }

}

export default Header