import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { success, error } from '../../helper/notificationHelper';
import { normalResponseHandler, errorHandler } from '../../helper/apiHelper';

export default function RegistrationModal(props) {

    const [show, setShow] = useState(false);
    const modalTitle = "Register";
    const [clubs, setClubs] = useState([]);

    const name = useRef('');
    const username = useRef('');
    const email = useRef('');
    const phone = useRef('');
    const sponsor_username = useRef('');
    const club = useRef('');
    const password = useRef('');
    const confirm_password = useRef('');


    const close = () => setShow(false)
    const open = () => setShow(true)

    const submit = (e) => {
        e.preventDefault();
        let user = {
            name: name.current.value,
            username: username.current.value,
            email: email.current.value,
            phone: phone.current.value,
            sponsor_username: sponsor_username.current.value,
            club_id: club.current.value,
            password: password.current.value
        }

        if (
            !user.name ||
            !user.username ||
            !user.email ||
            !user.phone ||
            user.club_id == 0 ||
            !user.password
        ) {
            error('All fields are required');
            return;
        }

        if (user.password != confirm_password.current.value) {
            error('Passwords don\'t match');
            return;
        }
        axios.get('/sanctum/csrf-cookie')
            .then(res => {
                axios.post('/api/user/register', {
                    user
                })
                    .then(response => {
                        success(response.data.message);

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

                    })
                    .catch(errorHandler);
            });
    }

    useEffect(() => {
        axios.get('/api/clubs')
            .then(response => {
                setClubs(response.data.clubs);
            })
            .catch(errorHandler);
    }, []);

    return (
        <>
            <a onClick={open} className="nav-link-styles">
                <i className="fas fa-sign-out-alt"></i>
                <span>
                    {modalTitle}
                </span>
            </a>

            <Modal show={show} onHide={close}>
                <form onSubmit={submit} className="modal-dialog modal-dialog-centered " role="document" style={{ margin: 0, }}>
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
                                    <span >Full name: </span>
                                    <input ref={name} type="text" className="form-control" placeholder="Enter full name" />

                                    <span>Username: </span>
                                    <input ref={username} type="text" className="form-control" placeholder="Enter username" />

                                    <span >Email address</span>
                                    <input ref={email} type="email" className="form-control" placeholder="Enter email" />

                                    <span >Phone: </span>
                                    <input ref={phone} type="text" className="form-control" placeholder="Enter phone number: " />

                                    <span >Sponsor's username</span>
                                    <input ref={sponsor_username} type="text" className="form-control" placeholder="Sponsor's Username" />

                                    <span>Club</span>
                                    <select ref={club} className="form-control"  >
                                        <option value="0">--- Select club ---</option>
                                        {clubs && clubs.map((club, idx) => {
                                            return <option value={club.id} key={idx}>{club.name}</option>
                                        })}
                                    </select>

                                    <span >Password</span>
                                    <div className="input-group" >
                                        <input ref={password} type="password" className="form-control" placeholder="Password" />
                                        <div className="input-group-addon d-flex">
                                            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#eb3a48', color: 'white', padding: '0 10px' }}>
                                                <i className="fa fa-eye-slash" aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>

                                    <span >Confirm Password</span>
                                    <div className="input-group"  >
                                        <input ref={confirm_password} type="password" className="form-control" placeholder="Password" />
                                        <div className="input-group-addon d-flex">
                                            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#eb3a48', color: 'white', padding: '0 10px' }}>
                                                <i className="fa fa-eye-slash" aria-hidden="true" />
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
