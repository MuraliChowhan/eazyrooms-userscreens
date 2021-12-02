import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import OTPVerification from "../products/Modals/OtpVerification";
import "./modals.css";

function ProfileAccountModal(props) {
    const [otpVerification, setOtpVerification] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    const {
        setLastReasonModal,
        params
    } = props;
    return (
        <>
            <div className="custom-bid-modal-height">

                <Modal className="custom-modal"
                    {...props}
                    size="md"
                    keyboard={false} >
                    <Modal.Header style={{ marginLeft: "3px" }} className="border-0  bg-transparent close-modal h5 mb-0 p-0" closeButton>
                        <div style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "500" }}>
                            Enter Mobile Number
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control mt-3" placeholder="Mobile number" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div style={{ backgroundColor: "#146eb4", color: "#fff", fontSize: "13px", borderRadius: "5px", padding: "8px", marginTop: "8px", cursor: "pointer" }}
                                    onClick={
                                        () => {
                                            setOtpVerification({ modal: true, type: '', modalType: 'New ', action: 'New', details: '', otpValue: 'false' });
                                        }
                                    }
                                >Send OTP</div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <OTPVerification
                    setOtpVerification={(doc) => setOtpVerification(doc)}
                    show={otpVerification.modal}
                    onHide={() => setOtpVerification({ modal: false, modalType: '', type: '', details: {} })}
                    params={otpVerification}

                />
            </div>
        </>
    );
}

export default ProfileAccountModal;
