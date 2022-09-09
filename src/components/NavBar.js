import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends PureComponent {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">News-Monk</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link "to="/">Home</Link>
        </li>
         
        <li className="nav-item">
         <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/health">health</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/science">science</Link>
        </li>
        <li className="nav-item">
         {/* <Link className="nav-link" to="/general">general</Link> */}
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/sports">sports</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/technology">technology</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to="/worldnews">worldnews</Link>
        </li>
         
           
         
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
 