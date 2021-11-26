import React from 'react'
import '../styes/user/main.css';
import Footer from './UserInc/Footer';
import Header from './UserInc/Header';
import Notice from './UserInc/Notice';

export default function UserLayout({ content }) {
    return (
        <>
            <Header />
            <Notice />
            {content}
            <Footer />
        </>
    )
}
