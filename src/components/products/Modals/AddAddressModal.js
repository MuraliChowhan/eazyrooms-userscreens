import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modal.css";

function AddAddressModal(props) {
    const {
        setAddNewServiceModal,
        params
    } = props;

    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-address-modal rounded"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header className="border-0 mx-2 py-4 bg-transparent close-modal h6 mb-0" closeButton>
                        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Add new address</div>
                    </Modal.Header>
                    <Modal.Body className="p-4 mt-0 pt-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <label className="lableNames">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="lableNames">Mobile Number</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text bg-transparent">
                                                        +91
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control phone-number" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <label className="lableNames">Pincode</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="lableNames">City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label className="lableNames">Address</label>
                                        <textarea class="form-control" id="floatingTextarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn address-btn">Add Address</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default AddAddressModal;
