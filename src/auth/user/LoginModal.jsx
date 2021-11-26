import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { errorHandler, normalResponseHandler } from '../../helper/apiHelper';
import { success } from '../../helper/notificationHelper';

export default function LoginModal(props) {

    const [show, setShow] = useState(false);
    const modalTitle = "Login";
    const [showPass, setShowPass] = useState(false);

    const email = useRef(null);
    const password = useRef(null);


    const togglePassword = () => {
        setShowPass(!showPass);
        console.log(showPass)
    }

    const close = () => setShow(false)
    const open = () => setShow(true)

    const submit = (e) => {
        e.preventDefault();

        let user = {
            email: email.current.value,
            password: password.current.value
        };

        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/api/user/login', {
                    user,
                    device: navigator.userAgent
                })
                    .then(res => {
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        localStorage.setItem('token', JSON.stringify(res.data.token));
                        if (res.data.message) {
                            success(res.data.message);

                            setTimeout(() => {
                                window.location.reload();
                            }, 1500);
                        }
                    })
                    .catch(errorHandler);
            });
    }

    return (
        <>
            <a onClick={open} className="nav-link-styles">
                <i className="fas fa-sign-out-alt"></i>
                <span>
                    {modalTitle}
                </span>
            </a>

            <Modal show={show} onHide={close}>
                <form onSubmit={submit} className="modal-dialog modal-dialog-centered" role="document" style={{ margin: 0, }}>
                    <div className="modal-content text-white modal-styles">
                        <div className="modal-header">
                            <div className="form-group col-6">
                                <h5 className="modal-title">
                                    {modalTitle}
                                </h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-wrap">
                                <div className="form-group mx-auto p-0 col-md-12">
                                    <span>Username: </span>
                                    <input ref={email} type="text" className="form-control" placeholder="Enter username" />
                                </div>
                                <div className="form-group mx-auto p-0 col-md-12">
                                    <span>Password </span>
                                    <div className="input-group" >
                                        <input ref={password} type={showPass ? "texr" : "password"} className="form-control" placeholder="Password" />
                                        <div onClick={togglePassword} className="input-group-addon d-flex">
                                            <a href="#" style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                background: '#eb3a48',
                                                color: 'white',
                                                padding: '0 10px'
                                            }}>

                                                <i style={{ display: showPass ? "none" : "inline" }} className="fa fa-eye-slash" aria-hidden="true" />
                                                {/* <i style={{ display: showPass ? "inline" : "none" }} className="fa fa-eye" aria-hidden="true" /> */}


                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-around pt-2">
                            <button type="submit" className="btn text-dark submit">
                                {modalTitle}
                            </button>
                        </div>
                    </div>
                </form>

            </Modal>
        </>
    )
}
