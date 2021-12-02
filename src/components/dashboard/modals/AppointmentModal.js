import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './modal.css';
import NewClientModal from "./NewClientModal";
import { MY_LIST } from "./variables";

function AddAppointmentModal(props) {
    const [newClientModal, setNewClientModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    const {
        setAppointmentModal,
        params,
        type
    } = props;

    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header className="border-0 px-0 py-0 bg-transparent close-modal h4 mb-0" closeButton>
                        <div className="modal-heading-text">{params.modalType}</div>
                    </Modal.Header>
                    <Modal.Body className="mt-4 pt-0">
                        {params.modalType === MY_LIST.APPOINTMENT ? <AddAppointments setNewClientModal={setNewClientModal} /> : null}
                        {params.modalType === MY_LIST.CLIENT ? <AddClient /> : null}
                        {params.modalType === MY_LIST.MESSAGES ? <SendMessage setNewClientModal={setNewClientModal} /> : null}
                        {params.modalType === MY_LIST.MAIL ? <SendMail setNewClientModal={setNewClientModal} /> : null}
                        {params.modalType === MY_LIST.INVOICE ? <SendInvoice setNewClientModal={setNewClientModal} /> : null}
                    </Modal.Body>
                </Modal>

                <NewClientModal
                    show={newClientModal.modal}
                    onHide={() => setNewClientModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                    params={newClientModal}
                />
            </div>
        </>
    );
}

function AddAppointments({ setNewClientModal }) {
    return (
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="mb-3">
                <div className="normal-text mb-3">
                    AB Devilliers
                </div>
                <div className="d-flex">
                    <i className="far fa-plus-square text-primary cursor-pointer"
                        onClick={() => setNewClientModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                    >
                    </i> <span style={{ marginLeft: "10px" }} className="normal-text">New Client</span>
                </div>
            </div>

        </form>
    )
}

function AddClient({ }) {
    return (
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
    )
}

function SendMessage({ setNewClientModal }) {
    return (
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="mb-3">
                <div className="normal-text mb-3">
                    AB Devilliers
                </div>
                <div className="d-flex">
                    <i className="far fa-plus-square text-primary cursor-pointer"
                        onClick={() => setNewClientModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                    >
                    </i> <span style={{ marginLeft: "10px" }} className="normal-text">New Client</span>
                </div>
            </div>
        </form>
    )
}

function SendMail({ setNewClientModal }) {
    return (
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="mb-3">
                <div className="normal-text mb-3">
                    AB Devilliers
                </div>
                <div className="d-flex">
                    <i className="far fa-plus-square text-primary cursor-pointer"
                        onClick={() => setNewClientModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                    >
                    </i> <span style={{ marginLeft: "10px" }} className="normal-text">New Client</span>
                </div>
            </div>

        </form>
    )
}

function SendInvoice({ setNewClientModal }) {
    return (
        <form>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="mb-3">
                <div className="normal-text mb-3">
                    AB Devilliers
                </div>
                <div className="d-flex">
                    <i className="far fa-plus-square text-primary cursor-pointer"
                        onClick={() => setNewClientModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                    >
                    </i> <span style={{ marginLeft: "10px" }} className="normal-text">New Client</span>
                </div>
            </div>

        </form>
    )
}

export default AddAppointmentModal;
