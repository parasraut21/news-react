import React from 'react'

export default function Footer(props) {
  return (
   <>
   <nav class={`navbar navbar-expand-lg  bottom navbar-dark bg-dark `}>
   <div className="container-fluid">
    <p className="navbar-brand" >Made By Paras Raut</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page" > | Copyright © 2023 News - India</p>
        </li>
        <li className="nav-item">
          <p className="nav-link" > |  Privacy Policy </p>
        </li>
        <li className="nav-item">
          <p className="nav-link" > |  Terms of Use </p>
        </li>
      </ul>
   
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
   </>
  )
}
