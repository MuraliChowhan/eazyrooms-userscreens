import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';
import OtpInput from "react-otp-input";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
// import LoginRegister from "./LoginRegister";

function OTPVerification(props) {
    let history = useHistory();
    const [seconds, setSeconds] = useState(120);
    const [code, setCode] = useState();
    const [otp, setOtp] = useState();

    const [otpRequire, setOtpRequire] = useState('');
    const [otpVerified, setOtpVerified] = useState('');

    const {
        setOtpVerification,
        params
    } = props;

    var intialCount;
    useEffect(() => {
        // if ( seconds < 0) {
        //      params.modal === true &&
        //     intialCount = setTimeout(() => setSeconds(seconds - 1), 1000);
        // } else {
        //     setSeconds('Expired');
        //     intialCount = setTimeout(() => setSeconds(seconds - 1));
        // }

        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('Expired!');
        }
    });

    const handleChange = (code) => {
        setCode(parseInt(code))
        setOtp(localStorage.getItem('user_id'))
    }

    const resendOtp = (resend) => {
        clearInterval(intialCount)
        setSeconds(120)
    }

    const otpRequired = () => {
        setOtpRequire('OTP Require')
    }


    return (
        <>
            <Modal
                {...props}
                className="custom-modal-css"
                keyboard={false}>
                <Modal.Header className="border-0 p-0 bg-transparent close-modal h5" closeButton>
                    OTP Verification
                </Modal.Header>
                <Modal.Body className="p-0 mt-3">
                    <div className="formsLables text-center mb-3" style={{ fontSize: "14px", color: "green" }}>
                        <span style={{ color: "red" }}>{otpRequire}</span>
                        {
                            code?.toString().length === 6 ?
                                <span style={{ color: "red" }}> {otpVerified} </span>
                                :
                                null
                        }
                        {/* {
                            
                            code?.toString().length <= 1 ?
                                <span style={{ color: "red" }}>{otpRequire}</span>
                                :
                                <span>{otpVerified}</span>
                        } */}
                    </div>
                    <div className="d-flex justify-content-center mx-auto mb-4">
                        <OtpInput
                            value={code}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span style={{ width: "8px" }}></span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            autoComplete="off"
                            inputStyle={{
                                border: "1px solid rgb(114, 114, 114)",
                                borderRadius: "8px",
                                width: "54px",
                                height: "54px",
                                fontSize: "12px",
                                color: "#000",
                                fontWeight: "400",
                                caretColor: "blue"
                            }}
                            focusStyle={{
                                border: "1px solid rgb(114, 114, 114)",
                                outline: "none"
                            }}
                        />
                    </div>
                    {
                        seconds <= 0 ?
                            <div className="text-center mb-3" style={{ color: "red", fontSize: "20px" }}>
                                Expired
                            </div>
                            :
                            <div className="text-center mb-3" style={{ color: "#000", fontSize: "28px" }}>
                                {seconds} <span>Seconds</span>
                            </div>
                    }
                    <div className="formsLables text-center">
                        Didn't received OTP? <span className="cursor-pointer" style={{ color: "#727272" }}
                            onClick={() => resendOtp('resend')}
                        > Resend OTP </span>
                    </div>
                    {
                        code?.toString().length >= 6 ?
                            <div
                                onClick={() => {
                                    setOtpVerification({ modal: false, modalType: 'New ', action: 'New', details: '', otpValue: 'false' });
                                    handleOtpSubmit();

                                    // setLoginRegModal({ modal: true, modalType: '', type: '', details: '' });
                                }}
                                className="col-12 rounded mt-3 text-center mb-1 cursor-pointer OTP-custom-button-color">
                                Submit
                            </div>
                            :
                            <div
                                onClick={otpRequired}
                                className="col-12 rounded mt-3 text-center mb-1 cursor-pointer OTP-custom-button-color">
                                Submit
                            </div>
                    }

                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    );
}
export default OTPVerification;