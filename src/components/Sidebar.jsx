import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to='/dashboard' className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Add User --> */}
<li className="nav-item active">
    <Link to='/add-user' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-cog"></i>
        <span>Add User</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Class --> */}
<li className="nav-item active">
    <Link to='/class' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-cog"></i>
        <span>Class</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Users --> */}
<li className="nav-item active">
    <Link to='users' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-wrench"></i>
        <span>Users</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Query --> */}
<li className="nav-item active">
    <Link to='/query' className="nav-link" href="index.html">
    <i className="fas fa-fw fa-folder"></i>
        <span>Query</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>


</ul>
  </>
}

export default Sidebar