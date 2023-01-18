import React from 'react'
import logo from '../images/logo.png';

export const Homepage = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="https://getbootstrap.com/">
                <img src={logo} alt="Bootstrap" width="30" height="30"></img>BULDHANA POLICE
            </a>
        </nav>
    </div>
    </div>
  )
}
