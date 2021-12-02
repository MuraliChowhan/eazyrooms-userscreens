import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modals.css";

function AddStageModal(props) {
    const {
        setAddStageModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Body className="p-4 mt-4 pt-0">
                        <label className="mb-2 normal-text">Stage Name</label>
                        <input type="text" className="form-control mb-3" />
                        <select className="normal-text form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option className="normal-text" selected>Pipeline 01</option>
                            <option className="normal-text" value="1">Pipeline 02</option>
                            <option className="normal-text" value="2">Pipeline 03</option>
                            <option className="normal-text" value="3">Pipeline 04</option>
                        </select>
                        <div className="d-flex justify-content-end mb-2">
                            <button className="btn buttonColors">Save</button>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default AddStageModal;
