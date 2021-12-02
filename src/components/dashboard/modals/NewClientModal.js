import React from "react";
import { Modal, Button } from 'react-bootstrap';
import './modal.css';

function NewClientModal(props) {
    const {
        setNewClientModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header className="border-0 px-0 py-0 bg-transparent close-modal h4 mb-0" closeButton>
                        <div className="modal-heading-text">New Client</div>
                    </Modal.Header>
                    <Modal.Body className="mt-4 pt-0">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label normal-text">First Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label normal-text">Last Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label normal-text">Phone Numer</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label normal-text">Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label normal-text">Gender</label>
                                <select id="disabledSelect" className="form-select p-2 normal-text">
                                    <option className="normal-text">Male</option>
                                    <option className="normal-text">Female</option>
                                    <option className="normal-text">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label normal-text">Address</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn buttonColors">Create Client</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default NewClientModal;
