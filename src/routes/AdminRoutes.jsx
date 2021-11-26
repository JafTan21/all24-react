import React from 'react'
import { Routes, Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>

            </Route>
        </Routes>
    )
}
