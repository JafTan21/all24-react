import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../services/AuthContext'
import NavLink from './NavLink';
import LoginModal from '../../auth/user/LoginModal';
import RegistrationModal from '../../auth/user/RegistrationModal';

export default function Header() {
    const auth = useContext(AuthContext);

    return (
        <div className="default-bg" id="Header">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img src="/assets/user/sitelogo.jpeg" alt="All 24" style={{
                        height: "50px",
                        width: "130px"
                    }} />
                </Link>

                <nav className="d-flex justify-content-center align-items-center">

                    <NavLink
                        to="/"
                        icon={<i className="fas fa-home"></i>}
                        text="Home"
                    />
                    {
                        auth ? null : <>
                            <LoginModal />
                            <RegistrationModal />
                        </>
                    }

                </nav>
            </div>
        </div >


    )
}
