import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modals.css";

function AddNewServiceModal(props) {
    const {
        setAddNewServiceModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header className="border-0 mx-2 py-0 bg-transparent close-modal h4 mb-0" closeButton>
                        <div></div>
                    </Modal.Header>
                    <Modal.Body className="p-4 mt-0 pt-0">
                        <label className="mb-2 normal-text">Service Name</label>
                        <input type="text" className="form-control mb-3" />
                        <label className="mb-2 normal-text">Service Image</label>
                        <div className="mb-3">
                            <input class="form-control form-control-sm" id="formFileSm" type="file" />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2 normal-text">Assined Staff</label>
                            <select className="form-select normal-text" aria-label="Default select example">
                                <option className="normal-text" selected>Open this select menu</option>
                                <option className="normal-text" value="1">One</option>
                                <option className="normal-text" value="2">Two</option>
                                <option className="normal-text" value="3">Three</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 normal-text">Price</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="text" />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2 normal-text">Duration</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="text" placeholder="Enter minutes" />
                            <span style={{ fontSize: "10px", color: "#74788d" }}> <i className="fas fa-info-circle"></i> Set 0 for free</span>
                        </div>
                        <div className="mb-3">
                            <label className="mb-2 normal-text">Order</label>
                            <input className="form-control form-control-sm" id="formFileSm" type="text" placeholder="ex:123" />
                        </div>
                        <div className="mb-3">
                            <label className="mb-2 normal-text">Status</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label normal-text" for="flexCheckChecked">
                                    Show
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label normal-text" for="flexCheckChecked">
                                    Hide
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                            <button className="btn buttonColors">Save</button>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default AddNewServiceModal;
