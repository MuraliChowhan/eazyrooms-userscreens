import React, { useState } from "react";
import "./list.css";
import ApplyCouponModal from "./modals/ApplyCouponModal";

function ItemsList() {
    const [applyCoupon, setApplyCoupon] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    return (
        <>
            <div>
                <div className="d-flex mb-3 justify-content-between col-8">
                    <div className="lists-item-heading">
                        My shopping bag <span style={{ color: "#000", fontSize: "16px" }}>(1 Item)</span>
                    </div>
                    <div className="lists-item-heading">
                        &#8377; Total : 120
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 mb-3 mb-md-0 mb-lg-0">
                        <div className="card" style={{ padding: "10px" }}>
                            <div className="media d-flex">
                                <img className="mr-3 border rounded" width="190px" height="200px" src="./Ears-corn.jpg" alt="Generic placeholder image" />
                                <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="media-heading">Sweet Corn Soup</span>
                                        <span className="media-remove">REMOVE</span>
                                    </div>
                                    <div className="cost-text mb-2">$2</div>
                                    <select style={{ fontSize: "13px" }} className="custom-select rounded">
                                        <option style={{ fontSize: "13px", padding: "10px" }} selected>Qty:1</option>
                                        <option style={{ fontSize: "13px", padding: "10px" }} value="1">2</option>
                                        <option style={{ fontSize: "13px", padding: "10px" }} value="2">3</option>
                                        <option style={{ fontSize: "13px", padding: "10px" }} value="3">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <div style={{ padding: "10px" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="apply-coupon-text"><i className="fas fa-percent "></i> Apply Coupon</div>
                                    <div className="apply-coupon-btn"
                                        onClick={() => setApplyCoupon({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                                    >Apply</div>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "10px" }}>
                                <div className="d-flex mb-1 justify-content-between">
                                    <span className="item-heading">
                                        Item Total
                                    </span>
                                    <span className="item-cost">
                                        $3
                                    </span>

                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        Delivery Free
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>Free delivery above <span style={{ color: "#000", fontWeight: "500" }}>	&#8377;50</span> </div>
                                    </span>
                                    <span className="item-cost">
                                        $3
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "10px" }}>
                                <div className="d-flex justify-content-between">
                                    <div className="items-total">Grand Total
                                        <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Inclusive of all taxes</div>
                                    </div>
                                    <div className="items-total">&#8377; 120</div>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "10px" }}>
                                <div className="d-flex justify-content-between">
                                    <div className="items-total">
                                        <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Average delivery time
                                        </div>
                                    </div>
                                    <div className="items-total">5-10 days</div>
                                </div>
                            </div>

                            <div className="card-footer bg-transparent">
                                <div className="custom-btn">Select Address</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ApplyCouponModal
                show={applyCoupon.modal}
                onHide={() => setApplyCoupon({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={applyCoupon}
            />
        </>
    );
}

export default ItemsList;
