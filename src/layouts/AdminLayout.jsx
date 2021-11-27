import React, { Suspense, useEffect, useState } from 'react'
import { AdminContext } from '../services/AdminContext';
import Nav from './AdminInc/Nav';
import Sidebar from './AdminInc/Sidebar';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export default function AdminLayout({ content, page }) {
    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!loggedIn) {
            navigate("/");
        }
    }, [setLoggedIn]);

    useEffect(() => {
        document.body.classList.add("hold-transition");
        document.body.classList.add("sidebar-mini");
    }, [])
    return (
        <>
            <AdminContext.Provider value={loggedIn}>
                <Suspense fallback={<Spinner />}>
                    <div className="wrapper">
                        <Nav />
                        <Sidebar />
                        <div className="content-wrapper">
                            <section className="content-header">
                                <div className="container-fluid">
                                    <div className="row mb-2">
                                        <div className="col-sm-6">
                                            <h1>{page}</h1>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="content">
                                {content}
                                {/* <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Title</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                Start creating your amazing application!
                            </div>
                        </div> */}
                            </section>
                        </div>


                        <aside className="control-sidebar control-sidebar-dark">
                        </aside>
                    </div>
                </Suspense>
            </AdminContext.Provider>
        </>
    )
}
