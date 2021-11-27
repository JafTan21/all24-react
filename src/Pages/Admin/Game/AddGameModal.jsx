import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

export default function AddGameModal() {
    const [show, setShow] = useState(false);
    const modalTitle = "Add new game";
    const close = () => setShow(false)
    const open = () => setShow(true)

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <>

            <button onClick={open} className="btn btn-success mb-3">
                {modalTitle}
            </button>

            <Modal show={show} onHide={close}>
                <div style={{ margin: 0 }}>
                    <div className="modal-content" >
                        <div className="modal-header">
                            <div className="form-group col-6 m-0">
                                <h5 className="modal-title">
                                    {modalTitle}
                                </h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-wrap">

                            </div>


                        </div>


                        <div className="form-group d-flex justify-content-around pt-2">
                            <button type="submit" className="btn text-dark submit">
                                {modalTitle}
                            </button>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}
