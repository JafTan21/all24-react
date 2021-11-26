import React, { useEffect } from 'react'
import Main from './AdminInc/Main';
import Nav from './AdminInc/Nav';
import Sidebar from './AdminInc/Sidebar';

export default function AdminLayout() {
    useEffect(() => {
        document.body.classList.add("hold-transition");
        document.body.classList.add("sidebar-mini");
    }, [])
    return (
        <>
            <div class="wrapper">
                <Nav />
                <Sidebar />
                <Main />

                <aside class="control-sidebar control-sidebar-dark">
                </aside>
            </div>
        </>
    )
}
