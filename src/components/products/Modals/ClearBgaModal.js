import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modal.css";

function ClearBagModal(props) {
    const {
        setAddNewServiceModal,
        params
    } = props;
    
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-moal rounded"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header className="border-0 mx-2 py-4 bg-transparent close-modal h4 mb-0" closeButton>
                        <div style={{ fontSize: "18px", color: "#000" }}>Clear bag</div>
                    </Modal.Header>
                    <Modal.Body className="p-4 mt-0 pt-0">
                        <p className="confirm-text text-center"> Are you sure you want to clear all the items from the bag? </p>
                        <div className="d-flex justify-content-center">
                            <button className="btn clear-bag-btn"> Clear bag</button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default ClearBagModal;
