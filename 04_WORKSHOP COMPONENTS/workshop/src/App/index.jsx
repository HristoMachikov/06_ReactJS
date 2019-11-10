import React, { Fragment } from 'react';

import './styles.css';

import Navigation from '../Navigation'
import Aside from '../Aside'
import Main from '../Main'
import Footer from '../Footer'

function App() {
  return (
    <div className="App">
      <Navigation path="../logo192.png" />
      <div className="Container">
        <Aside />
        <Main path="../logo192.png" />
      </div>
      <Footer path="../logo192.png" />
    </div>
  )
}

export default App;