import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modals.css";

function LastReasonModal(props) {
    const {
        setLastReasonModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Body className="mt-3 pt-0">
                        <div className="mb-3">
                            <input type="text" value="Lost Reason" className="form-control" />
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                            <button className="btn buttonColors normal-text">Create</button>
                            <button className="btn btn-secondary normal-text"
                                onClick={() => setLastReasonModal({ modal: false, action: 'Edit', modalType: 'Edit', details: '' })}
                                style={{ marginLeft:"10px" }}
                            >Cancel</button>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    );
}

export default LastReasonModal;
