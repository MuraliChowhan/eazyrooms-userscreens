import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modal.css";

function FilterModal(props) {
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
                    <Modal.Header className="border-0 mx-2 py-4 bg-transparent close-modal mb-0" closeButton>
                        <div className="user-lables" style={{ fontSize: "18px" }}>Filters</div>
                    </Modal.Header>
                    <Modal.Body className="p-4 mt-0 pt-0">
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                id="radio1"
                                name="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 order-types-labels">All Orders</label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                id="radio2"
                                name="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 order-types-labels">Active Orders</label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                id="radio3"
                                name="radio"
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 order-types-labels">Completed Orders</label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                id="radio4"
                                name="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 order-types-labels">Failed Orders</label>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default FilterModal;
