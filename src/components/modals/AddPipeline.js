import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modals.css";

function AddPipeline(props) {
    const {
        setAddPipeLineModal,
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
                        <div></div>
                    </Modal.Header>
                    <Modal.Body className="mt-4 pt-0">
                        ......
                        <div className="d-flex justify-content-end mb-2">
                            <button className="btn buttonColors">Save</button>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default AddPipeline;
