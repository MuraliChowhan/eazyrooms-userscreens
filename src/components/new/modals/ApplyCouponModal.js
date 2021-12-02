import React from "react";
import { Modal, Button } from 'react-bootstrap';
function ApplyCouponModal(props) {
    const {
        setRoleModal,
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
                            Apply Coupon
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control mt-3" placeholder="Enter coupon code" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <div style={{ color: "#ee741f", fontSize: "14px", marginTop: "8px", cursor: "pointer" }}>Apply</div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default ApplyCouponModal;
