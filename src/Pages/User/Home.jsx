import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { errorHandler } from '../../helper/apiHelper';
import UserLayout from '../../layouts/UserLayout'
import { AuthContext } from '../../services/AuthContext'

export default function Home() {

    const auth = useContext(AuthContext);

    return (
        <UserLayout content={

            <>

                {auth ? 'logged in' : 'logged out'}

            </>

        } />
    )
}
