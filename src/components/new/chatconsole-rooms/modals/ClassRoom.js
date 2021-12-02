import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import "./modal.css";

function ClassRoom(props) {
    const {
        setClassRoomModal,
        params,
        type
    } = props;

    return (
        <>
            <Modal
                size="lg"
                {...props}
                className="custom-modal-css p-4"
                keyboard={false}>
                <Modal.Header className="border-0 p-0 bg-transparent close-modal h5 px-4 pt-4" >
                    <div className="modal-header-text d-flex-justify-content-center">Class room</div>
                </Modal.Header>
                <Modal.Body className="p-4 pt-0">
                    <div className="my-4 text-center" style={{ fontSize: "14px", color: "#616466" }}>
                        Confirm you really wish to end this conversation?
                        Your customer will automatically receive a request to rate your exchange ranging from 1 to 5 stars.
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="librayr-cancel-button cursor-pointer" style={{ marginRight: "8px" }}
                            onClick={
                                () => {
                                    setClassRoomModal({ modal: false, modalType: 'New ', type: 'Close modal', action: 'New', details: '' });
                                }
                            }
                        >Cancel</div>
                        <div className="librayr-ok-button cursor-pointer">Close</div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ClassRoom;
