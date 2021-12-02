import React from "react";
import { Modal, Button } from 'react-bootstrap';
import "./modals.css";

function CreateNewStage(props) {
    const {
        setCreateStageModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-bid-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Body className="p-4 pt-0">
                        <div className="container">
                            <div className="d-flex mt-4 mb-4">
                                <div className="boxes" style={{ backgroundColor: "green", marginLeft: "30px" }}>

                                </div>
                                <div className="boxes" style={{ backgroundColor: "red", marginLeft: "30px" }}>

                                </div>
                                <div className="boxes" style={{ backgroundColor: "#26ffaf", marginLeft: "30px" }}>

                                </div>
                                <div className="boxes" style={{ backgroundColor: "pink", marginLeft: "30px" }}>

                                </div>
                                <div className="boxes" style={{ backgroundColor: "#727272", marginLeft: "30px" }}>

                                </div>
                                <div className="boxes" style={{ backgroundColor: "rgb(80 36 255)", marginLeft: "30px" }}>

                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-2">
                                <button className="btn buttonColors">Select</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    );
}

export default CreateNewStage;
