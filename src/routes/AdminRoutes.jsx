import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Login from '../auth/admin/Login'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../Pages/Admin/Dashboard'
import GameControl from '../Pages/Admin/Game/GameControl'

export default function AdminRoutes() {

    const adminURL = (url = '') => {
        return `/admin/${url}`;
    }

    return (
        <Routes>
            <Route path={adminURL('')} element={<Dashboard />} />
            <Route path={adminURL('dashboard')} element={<Dashboard />} />
            <Route path={adminURL('game-control')} element={<GameControl />} />

            <Route path={adminURL('login')} element={<Login />} />
        </Routes>
    )
}
