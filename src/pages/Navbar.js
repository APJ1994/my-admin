import React from 'react'

const Navbar = () => {
  return (
    <header className="header header-sticky mb-4">
    <div className="container-fluid">
      <button
        className="header-toggler px-md-0 me-md-3"
        onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()"
        type="button">
        <svg className="icon icon-lg">
          <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-menu" />
        </svg>
      </button>
      <a className="header-brand d-md-none" href="#">
        <svg alt="CoreUI Logo" height="46" width="118">
          <use xlinkHref="assets/brand/coreui.svg#full" />
        </svg>
      </a>

      <ul className="header-nav d-none d-md-flex">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Users
          </a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Settings
          </a>
        </li> */}
      </ul>

      <ul className="header-nav ms-auto">
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            <svg className="icon icon-lg">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bell" />
            </svg>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            <svg className="icon icon-lg">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-list-rich" />
            </svg>
          </a>
        </li> */}

        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            <svg className="icon icon-lg">
              <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-envelope-open" />
            </svg>
          </a>
        </li> */}
      </ul>

      <ul className="header-nav ms-3">
        <li className="nav-item dropdown">
          {/* <a
            aria-expanded="false"
            aria-haspopup="true"
            className="nav-link py-0"
            data-coreui-toggle="dropdown"
            href="#"
            role="button"> */}
            <div className="avatar avatar-md">
              <img
                alt="user@email.com"
                className="avatar-img"
                src="assets/img/avatars/8.jpg"
              />
            </div>
          
          

          <div className="dropdown-menu dropdown-menu-end pt-0">
            <div className="dropdown-header bg-light py-2">
              <div className="fw-semibold">Account</div>
            </div>
            {/* <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-bell" />
              </svg>{" "}
              Updates
              <span className="badge badge-sm bg-info ms-2">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-envelope-open" />
              </svg>{" "}
              Messages
              <span className="badge badge-sm bg-success ms-2">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-task" />
              </svg>{" "}
              Tasks
              <span className="badge badge-sm bg-danger ms-2">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-comment-square" />
              </svg>{" "}
              Comments
              <span className="badge badge-sm bg-warning ms-2">42</span>
            </a> */}

            <div className="dropdown-header bg-light py-2">
              <div className="fw-semibold">Settings</div>
            </div>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-user" />
              </svg>{" "}
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-settings" />
              </svg>{" "}
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-credit-card" />
              </svg>{" "}
              Payments
              <span className="badge badge-sm bg-secondary ms-2">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-file" />
              </svg>{" "}
              Projects
              <span className="badge badge-sm bg-primary ms-2">42</span>
            </a>

            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-lock-locked" />
              </svg>{" "}
              Lock Account
            </a>
            <a className="dropdown-item" href="#">
              <svg className="icon me-2">
                <use xlinkHref="vendors/@coreui/icons/svg/free.svg#cil-account-logout" />
              </svg>{" "}
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div className="header-divider" />

    <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb my-0 ms-2">
          <li className="breadcrumb-item">
            <span>Home</span>
          </li>

          <li className="breadcrumb-item active">
            <span>Dashboard</span>
          </li>
        </ol>
      </nav>
    </div>
  </header>
  )
}

export default Navbar
