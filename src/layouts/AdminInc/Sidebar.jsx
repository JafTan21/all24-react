import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    const adminURL = (url = '') => {
        return `/admin/${url}`;
    }

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="../../index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../../index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="../../index3.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}



                            <li className="nav-item">
                                <Link to={adminURL('dashboard')} className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        {/* <span className="right badge badge-danger">New</span> */}
                                    </p>
                                </Link>
                            </li>




                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-basketball-ball" />
                                    <p>
                                        Betting Panel
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to={adminURL('game-control')} className="nav-link">
                                            <i className="fas fa-gamepad nav-icon" />

                                            <p>Game control</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>





                            <li className="nav-item">
                                <a href="../widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Widgets
                                        {/* <span className="right badge badge-danger">New</span> */}
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

        </>
    )
}
