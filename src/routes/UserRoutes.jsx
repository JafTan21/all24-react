import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/User/Home'

export default function UserRoutes() {
    return (
        <Routes>

            <Route exact path="/" element={<Home />} />

        </Routes>
    )
}
