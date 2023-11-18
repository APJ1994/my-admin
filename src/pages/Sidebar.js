import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
    <div className="sidebar-brand d-none d-md-flex">
      MyStore Admin
    </div>
    <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
      <li className="nav-item"><Link className="nav-link" to="/">
          <svg className="nav-icon">
            <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-speedometer"></use>
          </svg> Dashboard</Link></li>
     
      <li className="nav-item"><Link className="nav-link" to="/pages/banner">
          <svg className="nav-icon">
            <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-image"></use>
          </svg> Banner</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/pages/categorybanner">
          <svg className="nav-icon">
            <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-image-plus"></use>
          </svg> Category Banner</Link></li>

          <li className="nav-title">My Store</li>
          <li className="nav-item"><Link className="nav-link" to="/pages/category">
          <svg className="nav-icon">
            <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-storage"></use>
          </svg> Category</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pages/product">
          <svg className="nav-icon">
            <use xlinkHref="../vendors/@coreui/icons/svg/free.svg#cil-child-friendly"></use>
          </svg> Products</Link></li>
     
    </ul>
    <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
  </div>
  )
}

export default Sidebar
